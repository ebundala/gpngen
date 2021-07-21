
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Service,
      ServiceResponse,
      ServiceBatchResponse,
      ServiceCountResponse,
      ServiceListResponse,
      AggregateServiceResponse,
    //  ServiceCreateInput,
    //  ServiceUpdateInput,
     // ServiceUpdateManyMutationInput,
     // ServiceWhereUniqueInput,
     // ServiceWhereInput,
     // ServiceOrderByInput,
     // ServiceScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Service)
      @UseGuards(AuthorizerGuard)
      export class ServiceResolver {
          
         
    @Query((returns)=>ServiceResponse)

    findUniqueService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Service', { select: {  } });
      return ctx.prisma.service.findUnique({...args,...select})
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
    @Query((returns)=>ServiceResponse)
    findFirstService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Service', { select: {  } });
      return ctx.prisma.service.findFirst({...args,...select})
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
    @Query((returns)=>ServiceListResponse)
    findManyService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Service', { select: {  } });
      return ctx.prisma.service.findMany({...args,...select})
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
    @Mutation((returns)=>ServiceResponse)
    createOneService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Service', { select: {  } });
      return ctx.prisma.service.create({...args,...select})
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
    @Mutation((returns)=>ServiceResponse)
    updateOneService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Service', { select: {  } });
      return ctx.prisma.service.update({...args,...select})
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