import { SendGridService } from '@anchan828/nest-sendgrid';
import { AppLogger } from '@mechsoft/app-logger';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientResponse } from "@sendgrid/client/src/response";
import { ResponseError } from "@sendgrid/helpers/classes";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";

@Injectable()
export class MailService {

    private from: string;
    private accountActivationTemplateId: string;   
    private welcomeTemplateId: string;
    private passwordResetTemplateId: string;



    constructor(
        private readonly sendGrid: SendGridService,
        private readonly config: ConfigService,
        private readonly logger: AppLogger,
    ) {
       // this.logger.setContext(MailService.name);
        this.from = this.config.get<string>("SENDGRID_SENDER_EMAIL");
        this.accountActivationTemplateId = this.config.get<string>("SENDGRID_ACCOUNT_ACTIVATION_TEMPLATE");
         this.welcomeTemplateId = this.config.get<string>("SENDGRID_WELCOME_TEMPLATE");
        this.passwordResetTemplateId = this.config.get<string>("SENDGRID_PASS_RESSET_TEMPLATE")
    }
     sendEmail(data: Partial<MailDataRequired> | Partial<MailDataRequired>[], 
        isMultiple?: boolean, 
        cb?: (err: Error | ResponseError, result: [ClientResponse, any]) => void): Promise<[ClientResponse, any]>{
        return this.sendGrid.send(data,isMultiple,cb)
    }
     sendAccountActivationEmail(user: any,) {
        this.logger.debug(this.sendAccountActivationEmail.name);
        if (user?.email && this.accountActivationTemplateId) {
            return this.sendGrid.send({
                templateId: this.accountActivationTemplateId,
                from: this.from,
                to: user?.email,
                dynamicTemplateData: { ...user }
            });
        }
    }
     sendPasswordResetLink(user:any,link:string) {
        this.logger.debug(this.sendPasswordResetLink.name);
       
        if (user.email && this.passwordResetTemplateId) {
            return this.sendGrid.send({
                templateId: this.passwordResetTemplateId,
                from: this.from,
                to: user?.email,
                dynamicTemplateData: { ...user, link }
            });
        }
    }
   
    

   
    async sendWelcomeEmail(user: any, link: string) {
        this.logger.debug(this.sendWelcomeEmail.name);
        if (user && this.welcomeTemplateId) {
            return this.sendGrid.send({
                templateId: this.welcomeTemplateId,
                from: this.from,
                to: user?.email,
                dynamicTemplateData: { ...user, link }
            });
        }
    }
}
