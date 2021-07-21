
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Location,
      LocationResponse,
      LocationBatchResponse,
      LocationCountResponse,
      LocationListResponse,
      AggregateLocationResponse,
    //  LocationCreateInput,
    //  LocationUpdateInput,
     // LocationUpdateManyMutationInput,
     // LocationWhereUniqueInput,
     // LocationWhereInput,
     // LocationOrderByInput,
     // LocationScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Location)
      @UseGuards(AuthorizerGuard)
      export class LocationResolver {
          
         
        }