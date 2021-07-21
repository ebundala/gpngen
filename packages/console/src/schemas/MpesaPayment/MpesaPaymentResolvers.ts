
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      MpesaPayment,
      MpesaPaymentResponse,
      MpesaPaymentBatchResponse,
      MpesaPaymentCountResponse,
      MpesaPaymentListResponse,
      AggregateMpesaPaymentResponse,
    //  MpesaPaymentCreateInput,
    //  MpesaPaymentUpdateInput,
     // MpesaPaymentUpdateManyMutationInput,
     // MpesaPaymentWhereUniqueInput,
     // MpesaPaymentWhereInput,
     // MpesaPaymentOrderByInput,
     // MpesaPaymentScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>MpesaPayment)
      @UseGuards(AuthorizerGuard)
      export class MpesaPaymentResolver {
          
         
        }