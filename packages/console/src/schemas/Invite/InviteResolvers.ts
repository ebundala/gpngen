
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Invite,
      InviteResponse,
      InviteBatchResponse,
      InviteCountResponse,
      InviteListResponse,
      AggregateInviteResponse,
    //  InviteCreateInput,
    //  InviteUpdateInput,
     // InviteUpdateManyMutationInput,
     // InviteWhereUniqueInput,
     // InviteWhereInput,
     // InviteOrderByInput,
     // InviteScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Invite)
      @UseGuards(AuthorizerGuard)
      export class InviteResolver {
          
         
    @Query((returns)=>InviteResponse)

    findUniqueInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<InviteResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Invite', { select: {  } });
      return ctx.prisma.invite.findUnique({...args,...select})
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
    @Query((returns)=>InviteListResponse)
    findManyInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<InviteListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Invite', { select: {  } });
      return ctx.prisma.invite.findMany({...args,...select})
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
    @Mutation((returns)=>InviteResponse)
    createOneInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<InviteResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Invite', { select: {  } });
      return ctx.prisma.invite.create({...args,...select})
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
    @Mutation((returns)=>InviteResponse)
    updateOneInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<InviteResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Invite', { select: {  } });
      return ctx.prisma.invite.update({...args,...select})
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