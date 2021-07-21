
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      SelcomDisbursement,
      SelcomDisbursementResponse,
      SelcomDisbursementBatchResponse,
      SelcomDisbursementCountResponse,
      SelcomDisbursementListResponse,
      AggregateSelcomDisbursementResponse,
    //  SelcomDisbursementCreateInput,
    //  SelcomDisbursementUpdateInput,
     // SelcomDisbursementUpdateManyMutationInput,
     // SelcomDisbursementWhereUniqueInput,
     // SelcomDisbursementWhereInput,
     // SelcomDisbursementOrderByInput,
     // SelcomDisbursementScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>SelcomDisbursement)
      @UseGuards(AuthorizerGuard)
      export class SelcomDisbursementResolver {
          
         
        }