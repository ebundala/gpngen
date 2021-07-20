import { HttpModule, Module } from '@nestjs/common';
import *  as Http from 'http';
import * as Https from 'https';
import { PrismaClientModule } from '@mechsoft/prisma-client';
import { MpesaTzController } from './mpesa-tz.controller';
import { MpesaTzService } from './mpesa-tz.service';

const keepAliveAgent = new Https.Agent({
  maxSockets: 100,
  keepAlive: true,
  maxFreeSockets: 10,
  timeout: 500000,
});

export const HTTP_CLIENT_CONFIG = {
  timeout: 50000,
  maxRedirects: 5,
  httpAgent: new Http.Agent({ keepAlive: true }),
  httpsAgent: keepAliveAgent,
};

@Module({
  imports: [
    HttpModule.register(HTTP_CLIENT_CONFIG)
  ],
 // controllers: [MpesaTzController],
  providers: [MpesaTzService],
  exports:[MpesaTzService]
})
export class MpesaTzModule { }
