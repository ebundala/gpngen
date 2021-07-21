
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Device,
      DeviceResponse,
      DeviceBatchResponse,
      DeviceCountResponse,
      DeviceListResponse,
      AggregateDeviceResponse,
    //  DeviceCreateInput,
    //  DeviceUpdateInput,
     // DeviceUpdateManyMutationInput,
     // DeviceWhereUniqueInput,
     // DeviceWhereInput,
     // DeviceOrderByInput,
     // DeviceScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Device)
      @UseGuards(AuthorizerGuard)
      export class DeviceResolver {
          
         
        }