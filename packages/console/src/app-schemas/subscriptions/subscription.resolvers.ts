import { Args, Context, Info, Resolver, Subscription } from "@nestjs/graphql";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { TenantContext } from "@mechsoft/common";
import { Invite, InviteResponse, InviteWhereUniqueInput, Order, OrderResponse, OrderWhereUniqueInput, Rating, RatingResponse, RatingWhereUniqueInput } from "src/models/graphql";
import { FEEDBACK_RECEIVED, INVITE_RECEIVED, ORDER_CHANGED, SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";
import { Inject, UseGuards } from "@nestjs/common";
import { PUB_SUB } from "src/pubsub/pubsub.module";


@Resolver()
@UseGuards(AuthorizerGuard)
export class SubscriptionResolver {
    constructor(private readonly pubSub: RedisPubSub,private readonly bloc: SubscriptionService) { }

    @Subscription(() => OrderResponse, {
        filter: function (payload: OrderWhereUniqueInput,            
            variables) {                
            return true;//payload != null && payload?.id == variables?.args?.id;
        },
        resolve: (payload: OrderWhereUniqueInput, args: any, context: TenantContext, info: any) => {
            debugger
            const {select} = context.prisma.getSelection(info).valueOf('data', 'Order', { select: {} });
            return context.prisma.order.findUnique({ where: payload, select })
                .then<OrderResponse, OrderResponse>((invite) => ({
                    status: true,
                    message: "ok",
                    data: invite as Order
                })).catch<OrderResponse>(({ message }) => ({
                    status: false,
                    message,
                }));
        }

    })
    orders(@Args("where") args, @Context() context: TenantContext, @Info() info) {
       // TODO test subscription then uncomment below checks
     //   if (context.auth?.uid) {
         ///${context?.auth?.uid??""}

            return this.pubSub.asyncIterator(`${ORDER_CHANGED}`, { args, context, info });
       // }
    }


    @Subscription(() => InviteResponse,
        {
            filter: function (payload: InviteWhereUniqueInput,
                variables: { args: InviteWhereUniqueInput, context: TenantContext, info }) {
                return true;//payload != null && payload?.id == variables?.args?.id;
            },
            resolve: (payload: InviteWhereUniqueInput, args: any, context: TenantContext, info: any) => {
                const {select} = context.prisma.getSelection(info).valueOf('data', 'Invite', { select: {} });

                return context.prisma.invite.findUnique({ where: payload, select })
                    .then<InviteResponse, InviteResponse>((invite) => ({
                        status: true,
                        message: "ok",
                        data: invite as Invite
                    })).catch<InviteResponse>(({ message }) => ({
                        status: false,
                        message,
                    }));
            }
        })
    invites(@Args() args, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${INVITE_RECEIVED}/${context.auth.uid}`, { args, context, info });
        }
    }



    @Subscription(() => RatingResponse,
        {
            filter: function (payload: RatingWhereUniqueInput,
                variables: { args: RatingWhereUniqueInput, context: TenantContext, info }) {
                return payload != null && payload?.id == variables?.args?.id;
            },
            resolve: (payload: RatingWhereUniqueInput, args: any, context: TenantContext, info: any) => {
                const {select} = context.prisma.getSelection(info).valueOf('data', 'Rating', { select: {} });

                return context.prisma.rating.findUnique({ where: payload, select })
                    .then<RatingResponse, RatingResponse>((invite) => ({
                        status: true,
                        message: "ok",
                        data: invite as Rating
                    })).catch<RatingResponse>(({ message }) => ({
                        status: false,
                        message,
                    }));
            }
        })
    ratings(@Args() args, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${FEEDBACK_RECEIVED}/${context.auth.uid}`, { args, context, info });
        }
    }
}