import {Args, Context, Info, Mutation, Resolver} from '@nestjs/graphql'
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';
import { DeviceResponse, RegisterDeviceInput,  } from 'src/models/graphql';
import { FcmRegistrationService } from './fcm-registration.service';
import { TenantContext } from '@mechsoft/common';

@Resolver((of)=>DeviceResponse)
@UseGuards(AuthorizerGuard)
export class FcmRegistrationResolver {
    constructor(private readonly service:FcmRegistrationService){}

@Mutation((returns)=>DeviceResponse)
async registerDevice(
    @Args('data') data:RegisterDeviceInput,@Context() ctx:TenantContext,@Info() info){
       return this.service.registerDevice(data,ctx,info);
    }
}