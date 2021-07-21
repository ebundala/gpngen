
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Rating,
      RatingResponse,
      RatingBatchResponse,
      RatingCountResponse,
      RatingListResponse,
      AggregateRatingResponse,
    //  RatingCreateInput,
    //  RatingUpdateInput,
     // RatingUpdateManyMutationInput,
     // RatingWhereUniqueInput,
     // RatingWhereInput,
     // RatingOrderByInput,
     // RatingScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Rating)
      @UseGuards(AuthorizerGuard)
      export class RatingResolver {
          
         
    @Query((returns)=>RatingResponse)

    findUniqueRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RatingResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Rating', { select: {  } });
      return ctx.prisma.rating.findUnique({...args,...select})
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
    @Query((returns)=>RatingResponse)
    findFirstRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RatingResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Rating', { select: {  } });
      return ctx.prisma.rating.findFirst({...args,...select})
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
    @Query((returns)=>RatingListResponse)
    findManyRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RatingListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Rating', { select: {  } });
      return ctx.prisma.rating.findMany({...args,...select})
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
    @Mutation((returns)=>RatingResponse)
    createOneRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RatingResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Rating', { select: {  } });
      return ctx.prisma.rating.create({...args,...select})
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
    @Mutation((returns)=>RatingResponse)
    updateOneRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<RatingResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', 'Rating', { select: {  } });
      return ctx.prisma.rating.update({...args,...select})
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