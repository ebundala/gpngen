
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      ServiceCategory,
      ServiceCategoryResponse,
      ServiceCategoryBatchResponse,
      ServiceCategoryCountResponse,
      ServiceCategoryListResponse,
      AggregateServiceCategoryResponse,
    //  ServiceCategoryCreateInput,
    //  ServiceCategoryUpdateInput,
     // ServiceCategoryUpdateManyMutationInput,
     // ServiceCategoryWhereUniqueInput,
     // ServiceCategoryWhereInput,
     // ServiceCategoryOrderByInput,
     // ServiceCategoryScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>ServiceCategory)
      @UseGuards(AuthorizerGuard)
      export class ServiceCategoryResolver {
          
         
    @Query((returns)=>ServiceCategoryResponse)

    findUniqueServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ServiceCategory', { select: {  } });
      return ctx.prisma.serviceCategory.findUnique({...args,...select})
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
    @Query((returns)=>ServiceCategoryResponse)
    findFirstServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ServiceCategory', { select: {  } });
      return ctx.prisma.serviceCategory.findFirst({...args,...select})
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
    @Query((returns)=>ServiceCategoryListResponse)
    findManyServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceCategoryListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ServiceCategory', { select: {  } });
      return ctx.prisma.serviceCategory.findMany({...args,...select})
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
    @Mutation((returns)=>ServiceCategoryResponse)
    createOneServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ServiceCategory', { select: {  } });
      return ctx.prisma.serviceCategory.create({...args,...select})
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
    @Mutation((returns)=>ServiceCategoryResponse)
    updateOneServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<ServiceCategoryResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'ServiceCategory', { select: {  } });
      return ctx.prisma.serviceCategory.update({...args,...select})
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