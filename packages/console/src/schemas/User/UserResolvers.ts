
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      User,
      UserResponse,
      UserBatchResponse,
      UserCountResponse,
      UserListResponse,
      AggregateUserResponse,
    //  UserCreateInput,
    //  UserUpdateInput,
     // UserUpdateManyMutationInput,
     // UserWhereUniqueInput,
     // UserWhereInput,
     // UserOrderByInput,
     // UserScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>User)
      @UseGuards(AuthorizerGuard)
      export class UserResolver {
          
         
    @Query((returns)=>UserResponse)

    findUniqueUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<UserResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
      return ctx.prisma.user.findUnique({...args,...select})
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
    @Query((returns)=>UserResponse)
    findFirstUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<UserResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
      return ctx.prisma.user.findFirst({...args,...select})
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
    @Query((returns)=>UserListResponse)
    findManyUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<UserListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
      return ctx.prisma.user.findMany({...args,...select})
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
    @Mutation((returns)=>UserResponse)
    updateOneUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<UserResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'User', { select: {  } });
      return ctx.prisma.user.update({...args,...select})
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