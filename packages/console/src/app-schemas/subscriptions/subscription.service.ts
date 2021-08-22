import { Bloc, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { Inject, Injectable } from "@nestjs/common";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { Invite, Order, Rating, Location, LatLon, NotificationType, Notification } from "src/models/graphql";
import { RedisCache } from "src/pubsub/redis.service";
import { FirebaseService } from "@mechsoft/firebase-admin";
import { PrismaClient } from '@mechsoft/prisma-client';
import { State } from "@prisma/client";
import { AppLogger } from "@mechsoft/app-logger";

export const ORDER_CHANGED = "ORDER_CHANGED";
export const ORDER_RECEIVED = "ORDER_RECEIVED";
export const INVITE_RECEIVED = "INVITE_RECEIVED";
export const INVITE_CHANGED = "INVITE_CHANGED";

export const FEEDBACK_RECEIVED = "FEEDBACK_RECEIVED";
export const LOCATION_CHANGED = "LOCATION_CHANGED";

@Injectable()
@Bloc()
export class SubscriptionService {

  constructor(
    private readonly pubSub: RedisPubSub,
    private readonly redisCache: RedisCache,
    private readonly client: PrismaClient,
    private readonly app: FirebaseService,
    private readonly log: AppLogger) {
    //register handlers for fcm here
    this.pubSub.subscribe(ORDER_RECEIVED, this.orderNotifications.bind(this));
    this.pubSub.subscribe(ORDER_CHANGED, this.orderChangeNotifications.bind(this));
    this.pubSub.subscribe(INVITE_RECEIVED, this.inviteNotifications.bind(this));
    this.pubSub.subscribe(INVITE_CHANGED, this.inviteChangeNotifications.bind(this));
    this.pubSub.subscribe(FEEDBACK_RECEIVED, this.reviewNotifications.bind(this));
  }

  async orderNotifications(data: Order) {
    debugger
    const manager = await this.client.order.findUnique({ where: { id: data.id } })
      .organization().owner().device({ select: { fcm_id: true } });

    const message: Notification = {
      notificationType: NotificationType.ORDER_RECIEVED,
      message: "You have new order",
      payload: data
    };
    if (manager?.fcm_id) {
      const result = await this.app.sendNotification(manager.fcm_id, {
        notification: {
          title: message.notificationType.replace("_", " "),
        },
        data: {
          payload: JSON.stringify(message)
        }
      }, {
        priority: "high"
      }).catch(e => e);
      this.log.debug(result);
    }
  }
  async orderChangeNotifications(data: { original: Order, changed: Order }) {
    debugger
    const { original, changed, } = data;
    const order = this.client.order.findUnique({ where: { id: changed.id } })

    const owner = await order.owner().device({ select: { fcm_id: true } });
    const provider = await order.provider().device({ select: { fcm_id: true } });
    const manager = await order.organization().owner().device({ select: { fcm_id: true } });
    this.log.debug(owner, provider, manager);
    let message: Notification;
    const devices = new Set<string>();
    if (original.state !== changed.state) {
      //order changed state
      message = {
        notificationType: NotificationType.ORDER_ACCEPTED,
        message: "Order state changed",
        payload: changed
      };
      //audience depends on new state
      // review => user
      // approved => user
      if (changed.state == State.REVIEW) {
        message.notificationType = NotificationType.ORDER_ACCEPTED
        if (owner?.fcm_id)
          devices.add(owner.fcm_id)
      }
      if (changed.state == State.APPROVED) {
        message.notificationType = NotificationType.ORDER_DISPATCHED
        if (owner?.fcm_id)
          devices.add(owner.fcm_id)
      }
      // completed => user/owner
      if (changed.state == State.COMPLETED) {
        message.notificationType = NotificationType.ORDER_DELIVERED;

        ([manager?.fcm_id, owner?.fcm_id]).forEach(fcm_id => { devices.add(fcm_id) });
      }

      // archived  => user/provider/owner
      // cancelled => all
      if (changed.state == State.REJECTED) {

        message.notificationType = NotificationType.ORDER_CANCELLED;

        ([owner?.fcm_id, manager?.fcm_id, provider?.fcm_id]).forEach(fcm_id => { devices.add(fcm_id) });
      }
      if (changed.state == State.ARCHIVED) {
        message.notificationType = NotificationType.ORDER_PAYED;
        ([owner?.fcm_id, manager?.fcm_id, provider?.fcm_id]).forEach(fcm_id => { devices.add(fcm_id) });
      }
    }
    else if (original.quantity !== changed.quantity
      || original.notes !== changed.notes
      || original.location?.lat != changed.location?.lat
      || original.location?.lon != changed.location?.lon
    ) {
      message = {
        notificationType: NotificationType.ORDER_UPDATED,
        message: "Order state changed",
        payload: changed
      };
      //the order was updated
      //Pending => owner
      if (changed.state == State.PENDING) {
        message = {
          notificationType: NotificationType.ORDER_UPDATED,
          message: "Order state changed",
          payload: changed
        };
        if (manager?.fcm_id)
          devices.add(manager.fcm_id)
      }
      //Review => manager/provider
      if (changed.state == State.REVIEW || changed.state == State.APPROVED) {
        message = {
          notificationType: NotificationType.ORDER_UPDATED,
          message: "Order state changed",
          payload: changed
        };
        ([provider?.fcm_id, manager?.fcm_id]).forEach(fcm_id => { devices.add(fcm_id) });
      }
    }

    //todo send to fcm

    if (devices.size > 0) {
      const filtered = [];
      devices.forEach(fcm_id => {
        if (fcm_id) filtered.push(fcm_id);
      });
      this.log.debug(filtered);
      let result = await this.app.sendNotification(filtered, {
        notification: {
          title: message.notificationType.replace("_", " "),
        },
        data: {
          payload: JSON.stringify(message)
        }
      }, {
        priority: "high"
      }).catch(e => e);
      this.log.debug(result);
    }
  }

  async inviteNotifications(data: { result: Invite }) {
    const { result } = data;
    const order = this.client.invite.findUnique({ where: { id: result.id } })

    const invitee = await order.invitee().device({ select: { fcm_id: true } });
    const message: Notification = {
      notificationType: NotificationType.INVITE_RECIEVED,
      message: "You have been invited to join an organization",
      payload: result
    };
    if (invitee?.fcm_id)
      await this.app.sendNotification(invitee.fcm_id, {
        notification: {
          title: message.notificationType.replace("_", " "),
        },
        data: {
          payload: JSON.stringify(message)
        }
      }, {
        priority: "high"
      }).catch(e => e);
  }
  async   inviteChangeNotifications(data: { original: Invite, changed: Invite }) {
    const { original, changed } = data;
    if(original.state !== changed.state) {
      const invite = await this.client.invite.findUnique({ where: { id: changed.id },include: { invitee: true,inviter:true,organization:true } })

       if(changed.state == State.APPROVED) {
        await this.client.organization.update({ where: { id: invite.organization.id },data:{
          staffs:{
            connect:{
              id:invite.invitee.id
            }
          }
         }});
       }
       else if(changed.state == State.REJECTED) {
        await this.client.organization.update({ where: { id: invite.organization.id },data:{
          staffs:{
            disconnect:{
              id:invite.invitee.id
            }
          }
         }});
       }
      
    }
  }


  async reviewNotifications(data: { result: Rating }) {
    const { result } = data;
    const order = this.client.rating.findUnique({ where: { id: result.id } })

    const reviewee = await order.owner().device({ select: { fcm_id: true } });
    const message: Notification = {
      notificationType: NotificationType.REVIEW_RECIEVED,
      message: "You have new review",
      payload: result
    };
    if (reviewee?.fcm_id)
      await this.app.sendNotification(reviewee.fcm_id, {
        notification: {
          title: message.notificationType.replace("_", " "),
        },
        data: {
          payload: JSON.stringify(message)
        }
      }, {
        priority: "high"
      }).catch(e => e);
  }


  @PrismaAttach("Order", "create")
  async orderCreated(req: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result, prisma, params } = req;
    // const {action,args} = params;
    this.pubSub.publish(`${ORDER_RECEIVED}`, result)
    return n(req);
  }

  @PrismaAttach("Order", "update", true)
  async orderPreUpdated(req: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result, prisma, params } = req;
    const { action, args } = params;

    //record its state before updating
    req.context = await prisma.order.findUnique({ where: args.where, select: args.select });
    return n(req);
  }
  @PrismaAttach("Order", "update")
  async orderHasbeenUpdated(args: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result, context } = args;
    //construct messages and publish to notifications pubsub
    this.pubSub.publish(`${ORDER_CHANGED}`, { id: result.id, original: context, changed: result });
    return n(args);
  }

  @PrismaAttach("Invite", "create")
  async inviteReceived(args: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${INVITE_RECEIVED}`, { id: result.id, result })
    return n(args);
  }


  @PrismaAttach("Invite", "update",true)
  async invitePreUpdated(req: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
   
    const { result, prisma, params } = req;
    const { action, args } = params;

    //record  state before updating
    req.context = await prisma.invite.findUnique({ where: args.where, select: args.select });
    return n(args);
  }
  @PrismaAttach("Invite", "update")
  async inviteUpdated(args: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
    const { result,context } = args;
    this.pubSub.publish(`${INVITE_CHANGED}`, { id: result.id, original:context,changed:result })
    return n(args);
  }


  @PrismaAttach("Rating", "create")
  async feedbackReceived(args: PrismaHookRequest<Rating>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${FEEDBACK_RECEIVED}`, { id: result.id, result })
    return n(args);
  }

  async updateUserLocation(uid: string, location: Location) {
    if (uid && location && location.lat && location.lon) {
      const key = `location/${uid}`;
      await this.redisCache.set(key, JSON.stringify(location));
      this.pubSub.publish(LOCATION_CHANGED, { id: uid });
    }

  }
  async getUserLocation(uid: string): Promise<LatLon> {
    const key = `location/${uid}`;
    const v = await this.redisCache.get(key);
    if (v) return JSON.parse(v);
  }
}