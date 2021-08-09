import { Bloc, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { Inject, Injectable } from "@nestjs/common";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { Invite, Order, Rating,Location, LatLon, NotificationType,Notification } from "src/models/graphql";
import { RedisCache } from "src/pubsub/redis.service";
import { FirebaseService } from "@mechsoft/firebase-admin";
import { PrismaClient} from '@mechsoft/prisma-client';
import { State } from "@prisma/client";

export const ORDER_CHANGED = "ORDER_CHANGED";
export const INVITE_RECEIVED = "INVITE_RECEIVED";
export const FEEDBACK_RECEIVED = "FEEDBACK_RECEIVED";
export const LOCATION_CHANGED = "LOCATION_CHANGED";

@Injectable()
@Bloc()
export class SubscriptionService {

  constructor(
    private readonly pubSub: RedisPubSub,
    private readonly redisCache:RedisCache,
    private readonly client: PrismaClient,
    private readonly app: FirebaseService) {
    //register handlers for fcm here
    this.pubSub.subscribe(ORDER_CHANGED,this.orderNotifications.bind(this));
    this.pubSub.subscribe(INVITE_RECEIVED,this.inviteNotifications.bind(this));
    this.pubSub.subscribe(FEEDBACK_RECEIVED,this.reviewNotifications.bind(this));
  }
   async orderNotifications(data:{original:Order,changed:Order}){
      debugger
      const {original,changed,} = data;
      const order= this.client.order.findUnique({where:{id:changed.id}})  

      const owner = await order.owner().device({select:{fcm_id:true}});
      const provider = await order.provider().device({select:{fcm_id:true}});
      const manager = await order.organization().owner().device({select:{fcm_id:true}});

      let message:Notification;
      const devices = [];
      if(original.state!==changed.state){
        //order changed state
        message = {
          notificationType:NotificationType.ORDER_ACCEPTED,
          message: "Order state changed",
          payload: changed
        };
        //audience depends on new state
        // review => user
        // approved => user
        if(changed.state == State.REVIEW || changed.state == State.APPROVED ){
          message.notificationType=NotificationType.ORDER_ACCEPTED
          devices.push(owner.fcm_id)
        }
        if(changed.state == State.APPROVED ){
          message.notificationType=NotificationType.ORDER_DISPATCHED
          devices.push(owner.fcm_id)
        }
        // completed => user/owner
        if(changed.state == State.COMPLETED){
          message.notificationType=NotificationType.ORDER_DELIVERED
          devices.push(owner.fcm_id,manager.fcm_id);
        }

        // archived  => user/provider/owner
        // cancelled => all
        if(changed.state == State.REJECTED){
          message.notificationType=NotificationType.ORDER_CANCELLED
          devices.push(owner.fcm_id,manager.fcm_id,provider.fcm_id);
        } 
        if(changed.state == State.ARCHIVED){
          message.notificationType=NotificationType.ORDER_PAYED
          devices.push(owner.fcm_id,manager.fcm_id,provider.fcm_id);
        } 
      }
      else if(original.quantity!==changed.quantity 
        || original.notes!==changed.notes
        || original.location?.lat!=changed.location?.lat
        || original.location?.lon!=changed.location?.lon
        ){
          message = {
            notificationType:NotificationType.ORDER_UPDATED,
            message: "Order state changed",
            payload: changed
          };
        //the order was updated
        //Pending => owner
        if(changed.state == State.PENDING ){
          message = {
            notificationType:NotificationType.ORDER_UPDATED,
            message: "Order state changed",
            payload: changed
          };
          devices.push(manager.fcm_id)
        }
       //Review => manager/provider
       if(changed.state == State.REVIEW || changed.state == State.APPROVED ){
        message = {
          notificationType:NotificationType.ORDER_UPDATED,
          message: "Order state changed",
          payload: changed
        };
        devices.push(provider.fcm_id,manager.fcm_id)
      }
        }

      //todo send to fcm
      
      await this.app.sendNotification(devices,{
        data: {
          payload:JSON.stringify(message)
        }
      },{
        priority:"high"
      })
    }
  async inviteNotifications(data:{result:Invite}){
    const {result} = data;
      const order= this.client.invite.findUnique({where:{id:result.id}})  

      const invitee = await order.invitee().device({select:{fcm_id:true}});
     const message:Notification = {
        notificationType:NotificationType.INVITE_RECIEVED,
        message: "You have been invited to join an organization",
        payload: result
      };
      await this.app.sendNotification(invitee.fcm_id,{
        data: {
          payload:JSON.stringify(message)
        }
      },{
        priority:"high"
      })
  }

  async reviewNotifications(data:{result:Rating}){
    const {result} = data;
      const order= this.client.rating.findUnique({where:{id:result.id}})  

      const invitee = await order.owner().device({select:{fcm_id:true}});
     const message:Notification = {
        notificationType:NotificationType.REVIEW_RECIEVED,
        message: "You have new review",
        payload: result
      };
      await this.app.sendNotification(invitee.fcm_id,{
        data: {
          payload:JSON.stringify(message)
        }
      },{
        priority:"normal"
      })
  }


  @PrismaAttach("Order", "update",true)
  async orderPreUpdated(req: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result ,prisma,params} = req;
    const {action,args} = params;
    debugger
    //record its state before updating
    req.context= await prisma.order.findUnique({where:args.where,select:args.select});
    //await this.pubSub.publish(`${ORDER_CHANGED}`, { id: result.id })
    return n(req);
  }
  @PrismaAttach("Order", "update")
  async orderHasbeenUpdated(args: PrismaHookRequest<Order>, n: PrismaHookHandler) {
    const { result,context } = args;
    debugger;
    //construct messages and publish to notifications pubsub
    this.pubSub.publish(`${ORDER_CHANGED}`, { id: result.id ,original:context,changed:result });
    return n(args);
  }

  @PrismaAttach("Invite", "create")
  async inviteReceived(args: PrismaHookRequest<Invite>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${INVITE_RECEIVED}`, { id: result.id ,result})
    return n(args);
  }


  @PrismaAttach("Rating", "create")
  async feedbackReceived(args: PrismaHookRequest<Rating>, n: PrismaHookHandler) {
    const { result } = args;

    this.pubSub.publish(`${FEEDBACK_RECEIVED}`, { id: result.id ,result})
    return n(args);
  }

  async updateUserLocation(uid: string,location:Location ){
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