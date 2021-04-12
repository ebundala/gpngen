
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class PolicySubscriptionResolver {
  constructor(private readonly service: PolicyService) { }
  
}
