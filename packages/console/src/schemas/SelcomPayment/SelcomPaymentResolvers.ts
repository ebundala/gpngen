
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      SelcomPayment,
      SelcomPaymentResponse,
      SelcomPaymentBatchResponse,
      SelcomPaymentCountResponse,
      SelcomPaymentListResponse,
      AggregateSelcomPaymentResponse,
    //  SelcomPaymentCreateInput,
    //  SelcomPaymentUpdateInput,
     // SelcomPaymentUpdateManyMutationInput,
     // SelcomPaymentWhereUniqueInput,
     // SelcomPaymentWhereInput,
     // SelcomPaymentOrderByInput,
     // SelcomPaymentScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>SelcomPayment)
      @UseGuards(AuthorizerGuard)
      export class SelcomPaymentResolver {
          
         
        }