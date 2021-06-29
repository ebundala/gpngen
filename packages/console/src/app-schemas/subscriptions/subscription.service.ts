import { Bloc, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { Inject, Injectable } from "@nestjs/common";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { Invite, Order, Rating } from "src/models/graphql";
export const ORDER_CHANGED = "ORDER_CHANGED";
export const INVITE_RECEIVED = "INVITE_RECEIVED";
export const FEEDBACK_RECEIVED = "FEEDBACK_RECEIVED";
@Injectable()
@Bloc()
export class SubscriptionService {

  constructor(private readonly pubSub: RedisPubSub) {

  }

  @PrismaAttach("Order", "update")
  async orderHasbeenUpdated(args: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result } = args;
    debugger
    await this.pubSub.publish(`${ORDER_CHANGED}`, { id: result.id })
    return n(args);
  }

  @PrismaAttach("Invite", "create")
  async inviteReceived(args: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${INVITE_RECEIVED}/`, { id: result.id })
    return n(args);
  }


  @PrismaAttach("Rating", "create")
  async feedbackReceived(args: PrismaHookRequest<Rating>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${FEEDBACK_RECEIVED}/`, { id: result.id })
    return n(args);
  }
}