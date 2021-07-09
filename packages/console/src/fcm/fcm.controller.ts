import { Controller, Post, Body, Get } from '@nestjs/common';
import { FcmService } from './fcm.service';
import { AppLogger } from '@mechsoft/app-logger';

@Controller('fcm')
export class FcmController {
    constructor(private readonly service: FcmService,
        private readonly logger: AppLogger){}
    @Post('notification')
    async sendNotification(@Body() payload){
       const data = JSON.parse(JSON.stringify(payload))
        this.logger.debug(data,FcmController.name);

     return this.service.sendNotification(data);
    }
}
