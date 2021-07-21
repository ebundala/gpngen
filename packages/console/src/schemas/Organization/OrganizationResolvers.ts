
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Organization,
      OrganizationResponse,
      OrganizationBatchResponse,
      OrganizationCountResponse,
      OrganizationListResponse,
      AggregateOrganizationResponse,
    //  OrganizationCreateInput,
    //  OrganizationUpdateInput,
     // OrganizationUpdateManyMutationInput,
     // OrganizationWhereUniqueInput,
     // OrganizationWhereInput,
     // OrganizationOrderByInput,
     // OrganizationScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Organization)
      @UseGuards(AuthorizerGuard)
      export class OrganizationResolver {
          
         
    @Query((returns)=>OrganizationResponse)

    findUniqueOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrganizationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Organization', { select: {  } });
      return ctx.prisma.organization.findUnique({...args,...select})
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
    @Query((returns)=>OrganizationResponse)
    findFirstOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrganizationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Organization', { select: {  } });
      return ctx.prisma.organization.findFirst({...args,...select})
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
    @Query((returns)=>OrganizationListResponse)
    findManyOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrganizationListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Organization', { select: {  } });
      return ctx.prisma.organization.findMany({...args,...select})
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
    @Mutation((returns)=>OrganizationResponse)
    createOneOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrganizationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Organization', { select: {  } });
      return ctx.prisma.organization.create({...args,...select})
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
    @Mutation((returns)=>OrganizationResponse)
    updateOneOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<OrganizationResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Organization', { select: {  } });
      return ctx.prisma.organization.update({...args,...select})
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