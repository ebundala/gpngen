import { SendGridModule, SendGridModuleOptions } from '@anchan828/nest-sendgrid';
import { DynamicModule, Global, Module } from '@nestjs/common';
//import dotenv from 'dotenv';
//import { PrismaClientModule } from '../prisma-client/prisma-client.module';
import { MailService } from './mail.service';
//const config = dotenv.config();
//console.log(config.parsed.SENDGRID_API_KEY)
@Global()
@Module({
})
export class MailModule {
  static forRoot(options: SendGridModuleOptions): DynamicModule{
   return {
     module: MailModule,
      imports: [SendGridModule.forRoot(options)],
      providers: [MailService],
      exports: [MailService]
    }
  }
 }
