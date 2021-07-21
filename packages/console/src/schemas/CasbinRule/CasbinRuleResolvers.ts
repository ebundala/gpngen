
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      CasbinRule,
      CasbinRuleResponse,
      CasbinRuleBatchResponse,
      CasbinRuleCountResponse,
      CasbinRuleListResponse,
      AggregateCasbinRuleResponse,
    //  CasbinRuleCreateInput,
    //  CasbinRuleUpdateInput,
     // CasbinRuleUpdateManyMutationInput,
     // CasbinRuleWhereUniqueInput,
     // CasbinRuleWhereInput,
     // CasbinRuleOrderByInput,
     // CasbinRuleScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>CasbinRule)
      @UseGuards(AuthorizerGuard)
      export class CasbinRuleResolver {
          
         
        }