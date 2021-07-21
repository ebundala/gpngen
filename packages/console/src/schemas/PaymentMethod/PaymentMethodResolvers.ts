
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      PaymentMethod,
      PaymentMethodResponse,
      PaymentMethodBatchResponse,
      PaymentMethodCountResponse,
      PaymentMethodListResponse,
      AggregatePaymentMethodResponse,
    //  PaymentMethodCreateInput,
    //  PaymentMethodUpdateInput,
     // PaymentMethodUpdateManyMutationInput,
     // PaymentMethodWhereUniqueInput,
     // PaymentMethodWhereInput,
     // PaymentMethodOrderByInput,
     // PaymentMethodScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>PaymentMethod)
      @UseGuards(AuthorizerGuard)
      export class PaymentMethodResolver {
          
         
    @Query((returns)=>PaymentMethodResponse)

    findUniquePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<PaymentMethodResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'PaymentMethod', { select: {  } });
      return ctx.prisma.paymentMethod.findUnique({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
    @Query((returns)=>PaymentMethodResponse)
    findFirstPaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<PaymentMethodResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'PaymentMethod', { select: {  } });
      return ctx.prisma.paymentMethod.findFirst({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }
    @Query((returns)=>PaymentMethodListResponse)
    findManyPaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<PaymentMethodListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'PaymentMethod', { select: {  } });
      return ctx.prisma.paymentMethod.findMany({...args,...select})
      .then((data)=>({
        status:true,
        data:data??[],
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }
    @Mutation((returns)=>PaymentMethodResponse)
    createOnePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<PaymentMethodResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'PaymentMethod', { select: {  } });
      return ctx.prisma.paymentMethod.create({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
    @Mutation((returns)=>PaymentMethodResponse)
    updateOnePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<PaymentMethodResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'PaymentMethod', { select: {  } });
      return ctx.prisma.paymentMethod.update({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }
        }