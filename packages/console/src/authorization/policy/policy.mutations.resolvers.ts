
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class PolicyMutationResolver {
  constructor(private readonly service: PolicyService) { }
  
@Mutation()
@UseGuards(AuthorizerGuard)
signup(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
signin(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
recoverAccount(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
signout(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
registerDevice(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
paybill(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
locationFeed(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneInvite(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOnePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOnePaymentMethod(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
createOneServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
updateOneUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Mutation()
@UseGuards(AuthorizerGuard)
version(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }

}
