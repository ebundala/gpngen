import { Module, UseGuards } from "@nestjs/common";
import { SubscriptionResolver } from "./subscription.resolvers";
import { SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";

@Module({    
    providers: [SubscriptionResolver, SubscriptionService],
  })
  
  export class SubscriptionModule { 
      
  }