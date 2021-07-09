import { Injectable } from '@nestjs/common';
import { FirebaseService } from '@mechsoft/firebase-admin';
import {messaging} from "firebase-admin";
import { AppLogger } from '@mechsoft/app-logger';
@Injectable()
export class FcmService {
    constructor(private readonly admin: FirebaseService,
        private readonly  logger: AppLogger){}
  async  sendNotification(body:{ token: string,payload:messaging.DataMessagePayload,options:messaging.MessagingOptions}){
       try{
    if(!body.token){
            throw new Error("Invalid token cannot send notification")
        }
       const result = await this.admin.sendNotification(body.token,body.payload,body.options);
      const message = result.multicastId;
      if(result.results.length){
          const msg = result.results[0];
          if(msg.error){
              throw msg.error;
          }
      }
       this.logger.debug(`message sent with id=${message}`,FcmService.name)
       return result;
   }
    catch(e){
        this.logger.error(e.message,FcmService.name)
      return e;
    }
}
}
