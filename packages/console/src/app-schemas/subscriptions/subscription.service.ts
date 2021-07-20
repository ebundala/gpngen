import { Bloc, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { Inject, Injectable } from "@nestjs/common";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { Invite, Order, Rating,Location, LatLon } from "src/models/graphql";
import { RedisCache } from "src/pubsub/redis.service";
export const ORDER_CHANGED = "ORDER_CHANGED";
export const INVITE_RECEIVED = "INVITE_RECEIVED";
export const FEEDBACK_RECEIVED = "FEEDBACK_RECEIVED";
export const LOCATION_CHANGED = "LOCATION_CHANGED";

@Injectable()
@Bloc()
export class SubscriptionService {

  constructor(private readonly pubSub: RedisPubSub,private readonly redisCache:RedisCache) {

  }

  @PrismaAttach("Order", "update")
  async orderHasbeenUpdated(args: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result } = args;
    
    await this.pubSub.publish(`${ORDER_CHANGED}`, { id: result.id })
    return n(args);
  }

  @PrismaAttach("Invite", "create")
  async inviteReceived(args: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${INVITE_RECEIVED}`, { id: result.id })
    return n(args);
  }


  @PrismaAttach("Rating", "create")
  async feedbackReceived(args: PrismaHookRequest<Rating>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${FEEDBACK_RECEIVED}`, { id: result.id })
    return n(args);
  }

  async updateUserLocation(uid: string,location:LatLon ){
    if(uid&&location&&location.lat&&location.lon){
      const key = `location/${uid}`;
     await this.redisCache.set(key,JSON.stringify(location));
     this.pubSub.publish(LOCATION_CHANGED,{id:uid});
    }
    
  }
  async getUserLocation(uid:string): Promise<LatLon>{
    const key = `location/${uid}`;
    const v=await this.redisCache.get(key);
    if(v) return JSON.parse(v);
  }
}