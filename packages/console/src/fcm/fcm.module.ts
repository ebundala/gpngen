import { Module } from '@nestjs/common';
import { FcmController } from './fcm.controller';
import { FcmService } from './fcm.service';
import { FirebaseModule } from '@mechsoft/firebase-admin';

@Module({
  imports:[FirebaseModule],
  controllers: [FcmController],
  providers: [FcmService]
})
export class FcmModule {}
