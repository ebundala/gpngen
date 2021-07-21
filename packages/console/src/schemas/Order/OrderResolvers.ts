
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Order,
      OrderResponse,
      OrderBatchResponse,
      OrderCountResponse,
      OrderListResponse,
      AggregateOrderResponse,
    //  OrderCreateInput,
    //  OrderUpdateInput,
     // OrderUpdateManyMutationInput,
     // OrderWhereUniqueInput,
     // OrderWhereInput,
     // OrderOrderByInput,
     // OrderScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Order)
      @UseGuards(AuthorizerGuard)
      export class OrderResolver {
          
         
    @Query((returns)=>OrderResponse)

    findUniqueOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrderResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Order', { select: {  } });
      return ctx.prisma.order.findUnique({...args,...select})
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
    @Query((returns)=>OrderResponse)
    findFirstOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrderResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Order', { select: {  } });
      return ctx.prisma.order.findFirst({...args,...select})
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
    @Query((returns)=>OrderListResponse)
    findManyOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrderListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Order', { select: {  } });
      return ctx.prisma.order.findMany({...args,...select})
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
    @Mutation((returns)=>OrderResponse)
    createOneOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrderResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Order', { select: {  } });
      return ctx.prisma.order.create({...args,...select})
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
    @Mutation((returns)=>OrderResponse)
    updateOneOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrderResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Order', { select: {  } });
      return ctx.prisma.order.update({...args,...select})
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