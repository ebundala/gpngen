import {Injectable} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TenantContext } from '@mechsoft/common';
import { DeviceUpdateWithoutUserInput } from 'src/models/graphql';

@Injectable()
export class FcmRegistrationService {
    
    async registerDevice(data:DeviceUpdateWithoutUserInput,ctx:TenantContext,info){
        const {auth,prisma} = ctx;
       if(auth.uid){
        const select = ctx.prisma.getSelection(info).valueOf('data', 'Device', { select: {  } });
        return prisma.device.upsert({
            where:{device_id:data.device_id},
            create:{
                ...data,userId:auth.uid
            },
            update:{
                device_id:{
                    set:data.device_id
                },
                type:{
                    set:data.type
                },
                fcm_id:{
                    set:data.fcm_id
                },
              userId:{
                  set:auth.uid
              }
            },
            ...select})
        .then((data)=>({
            status:true,
            data,
            message:'ok'
          })).catch(({message})=>({
           status:false,
           data:null,
           message:message||'unknown error'
          }));
       }
    }
}