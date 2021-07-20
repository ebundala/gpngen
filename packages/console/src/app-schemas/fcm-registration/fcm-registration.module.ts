import {Module} from '@nestjs/common'
import { FcmRegistrationResolver } from './fcm-registration.resolver';
import { FcmRegistrationService } from './fcm-registration.service';

@Module({
    providers:[FcmRegistrationResolver,FcmRegistrationService],
    exports:[FcmRegistrationService]
})
export class FcmRegistrationModule {

}