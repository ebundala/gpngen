
import { Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyQueryResolver } from './policy.query.resolvers';
import { PolicyMutationResolver } from './policy.mutations.resolvers';
import { PolicySubscriptionResolver } from './policy.subscriptions.resolvers';

@Module({
  providers: [PolicyQueryResolver, PolicyMutationResolver, PolicySubscriptionResolver, PolicyService]
})
export class PolicyModule { }
