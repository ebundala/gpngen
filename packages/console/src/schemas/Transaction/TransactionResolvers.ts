
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Transaction,
      TransactionResponse,
      TransactionBatchResponse,
      TransactionCountResponse,
      TransactionListResponse,
      AggregateTransactionResponse,
    //  TransactionCreateInput,
    //  TransactionUpdateInput,
     // TransactionUpdateManyMutationInput,
     // TransactionWhereUniqueInput,
     // TransactionWhereInput,
     // TransactionOrderByInput,
     // TransactionScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Transaction)
      @UseGuards(AuthorizerGuard)
      export class TransactionResolver {
          
         
        }