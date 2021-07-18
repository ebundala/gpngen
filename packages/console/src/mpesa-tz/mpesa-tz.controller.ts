import { Body, Controller, Headers, Param, Post } from '@nestjs/common';
import { AppLogger } from '@mechsoft/app-logger'
import { MpesaTzService, PaybillDto } from './mpesa-tz.service';

@Controller('mpesa')
export class MpesaTzController {
    constructor(private readonly service: MpesaTzService, private readonly logger: AppLogger) { }
    @Post('paybill')
    async paybill(@Body() body: PaybillDto, @Headers() headers, @Param() params) {
      //  this.logger.setContext(MpesaTzController.name);
        this.logger.debug(body)
        // this.logger.warn(headers)
        // this.logger.debug(params);        
        return this.service.paybill(body);
    }

}
