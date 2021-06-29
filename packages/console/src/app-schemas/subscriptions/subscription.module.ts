import { Module, UseGuards } from "@nestjs/common";
import { SubscriptionResolver } from "./subscription.resolvers";
import { SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";
import { PubSubModule } from "src/pubsub/pubsub.module";

@Module({    
  imports:[PubSubModule],
    providers: [SubscriptionResolver, SubscriptionService],
  })
  
  export class SubscriptionModule { 
      
  }