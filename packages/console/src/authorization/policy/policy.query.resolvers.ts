
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class PolicyQueryResolver {
  constructor(private readonly service: PolicyService) { }
  
@Query()
@UseGuards(AuthorizerGuard)
findUniqueAttachment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstAttachment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyAttachment(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueLocation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstLocation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyLocation(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyOrder(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyOrganization(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyRating(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyService(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyServiceCategory(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findUniqueUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findFirstUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
findManyUser(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }



@Query()
@UseGuards(AuthorizerGuard)
version(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }

}
