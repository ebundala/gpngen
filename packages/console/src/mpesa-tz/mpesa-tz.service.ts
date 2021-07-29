import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as NodeRsa from 'node-rsa';
import { join } from 'path';
import { AppLogger } from '@mechsoft/app-logger';
import { HTTP_CLIENT_CONFIG } from './mpesa-tz.module';
@Injectable()
export class MpesaTzService {
    private API_KEY: string;
    private PUB_KEY: string;
    private COUNTRY: string;
    private CURRENCY: string;
    private BASE_URL: string;
    private links: Endpoints;
    private SESSION_TTL: number;
    private SESSION_KEY: string;
    private KEY: NodeRsa;
    public MPESA_ORG_SHORTCODE:string;
    constructor(
        private readonly config: ConfigService,
        private readonly logger: AppLogger,
        private readonly httpService: HttpService
    ) {
        const baseUrl = this.config.get<string>('MPESA_BASE_URL');
        this.SESSION_TTL = this.config.get<number>('MPESA_SESSION_TTL');
        this.PUB_KEY = this.config.get<string>('MPESA_PUB_KEY')
        this.API_KEY = this.config.get<string>('MPESA_API_KEY');
        this.MPESA_ORG_SHORTCODE = this.config.get<string>("MPESA_ORG_SHORTCODE")
        //this.httpService.axiosRef.defaults.baseURL = baseUrl;
        this.httpService.axiosRef.defaults.headers.post['Content-Type'] = 'application/json';
        this.links = new Endpoints(baseUrl);
       // this.logger.setContext(MpesaTzService.name);
        this.initKey();
    }
    private initKey() {
        const publicKey = `
        -----BEGIN PUBLIC KEY-----  
        ${this.PUB_KEY} 
        -----END PUBLIC KEY-----`;
        // this.logger.debug(publicKey);
        //this.logger.debug(this.API_KEY);

        this.KEY = new NodeRsa(publicKey, 'pkcs8-public-pem', { encryptionScheme: 'pkcs1' });
        this.generateToken();
    }
    public encrypt(data: string) {
        return this.KEY.encrypt(data, 'base64');
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    async generateToken() {
        const authorization = `Bearer ${this.encrypt(this.API_KEY)}`;
        this.logger.debug('......essueing new session start....')

        try {
            const result = await this.httpService.axiosRef.get<SessionResponse>(this.links.getToken, {
                ...HTTP_CLIENT_CONFIG,
                headers: {
                    authorization,
                    origin: "*",
                    contentType: "application/json",
                    accept: "application/json",
                    //    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"
                }
            });
            if (result.status == 200) {
                const data = result.data
                if (data.output_ResponseCode == "INS-0") {
                    const cb = () => {
                        this.SESSION_KEY = data.output_SessionID;
                        this.logger.debug(`new session ${this.SESSION_KEY}`);
                    }
                    setTimeout(cb.bind(this), 30000);

                }
            }
        } catch (e) {
            setTimeout(this.generateToken.bind(this), 6630000);
            
        }
        this.logger.debug('.....essueing new session end.......')
    }

    async handleWebhook() { }
    async queryPaymentStatus() { }
    async paybill(body: PaybillDto): Promise<PaymentResponse> {
        // delete headers.host;

        try {

            
            const authorization = `Bearer ${this.encrypt(this.SESSION_KEY)}`;
            this.logger.debug("KEY IS " + authorization);
            const result = await this.httpService.axiosRef.post<PaymentResponse>(this.links.payment, body, {
                ...HTTP_CLIENT_CONFIG,
                headers: {
                    authorization,
                    origin: "*",
                    contentType: "application/json",
                    accept: "application/json",
                }
            });
            this.logger.debug(result.data)
            return result.data;
        } catch (e) {
            
            this.logger.error(e.message);
            return e.response.data
        }
    }
    async disburse() { }
    async queryDisburseStatus() { }
    async selcomWebhook(data) {
        const now = new Date();
        const f = join(__dirname, `../../selcom-${now.getTime()}.json`)

        const st = `
        ${JSON.stringify(data)}
        `
       // await writeFile(f, st, { flag: "a" });
        this.logger.debug("log file written ", MpesaTzService.name)
        return data
    }
}


class Endpoints {
    private URL;
    public getToken: string;
    public webhook: string;
    public payment: string;
    public disburse: string;
    public queryTransactionStatus: string;

    constructor(baseUrl = "", country: MpesaMarkets = MpesaMarkets.TZN) {
        this.URL = `${baseUrl}/${country}`;
        this.getToken = `${this.URL}/getSession/`;
        this.webhook = ``;
        this.queryTransactionStatus = `${this.URL}/queryTransactionStatus//`;
        this.payment = `${this.URL}/c2bPayment/singleStage/`;
        this.disburse = `${this.URL}/b2cPayment//`;
    }
}
enum MpesaMarkets {
    TZN = "vodacomTZN",
    GHA = "vodafoneGHA"
}
enum MpesaCurrency {
    TZN = "TZS",
    GHA = "GHS"
}
class SessionResponse {
    public output_ResponseCode: "INS-0" | "INS-989";
    public output_ResponseDesc: string;
    public output_SessionID: string;
}

export interface PaybillDto {
    input_Amount: string;
    input_Country: string;
    input_Currency: string;
    input_CustomerMSISDN: string;
    input_ServiceProviderCode: string;
    input_ThirdPartyConversationID: string;
    input_TransactionReference: string;
    input_PurchasedItemsDesc: string;
}
export interface PaymentResponse {
    output_ResponseCode: string;
    output_ResponseDesc: string;
    output_TransactionID: string;
    output_ConversationID: string;
    output_ThirdPartyConversationID: string;
}