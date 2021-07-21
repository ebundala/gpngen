import {Args, Context, Info, Mutation, Resolver} from '@nestjs/graphql'
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';
import { DeviceResponse, DeviceUpdateWithoutUserInput } from 'src/models/graphql';
import { FcmRegistrationService } from './fcm-registration.service';
import { TenantContext } from '@mechsoft/common';

@Resolver((of)=>DeviceResponse)
@UseGuards(AuthorizerGuard)
export class FcmRegistrationResolver {
    constructor(private readonly service:FcmRegistrationService){}

@Mutation((returns)=>DeviceResponse)
async registerDevice(
    @Args('Data') data:DeviceUpdateWithoutUserInput,@Context() ctx:TenantContext,@Info() info){
        this.service.registerDevice(data,ctx,info);
    }
}