import { Args, Context, Info, Resolver, Subscription } from "@nestjs/graphql";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { TenantContext } from "@mechsoft/common";
import { Invite, InviteResponse, InviteWhereUniqueInput, Order, OrderResponse, OrderWhereUniqueInput, Rating, RatingResponse, RatingWhereUniqueInput } from "src/models/graphql";
import { FEEDBACK_RECEIVED, INVITE_RECEIVED, ORDER_CHANGED, SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";
import {  UseGuards } from "@nestjs/common";


@Resolver()
@UseGuards(AuthorizerGuard)
export class SubscriptionResolver {
    constructor(private readonly pubSub: RedisPubSub, private readonly bloc: SubscriptionService) { }

    @Subscription(() => OrderResponse, {
        filter: async (where: OrderWhereUniqueInput,
            variables, context: TenantContext) => {
            debugger;

            const { prisma, auth } = context;
             const order= await prisma.order.findUnique({
                where, select: {
                    owner: {
                        select: { id: true }
                    },
                    provider: {
                        select: { id: true }
                    },
                    organization: {
                        select: {
                            owner:
                            {
                                select: { id: true }

                            }
                        }
                    }
                }
            });
           return [order.organization.owner.id,order.owner.id,order.provider.id].includes(auth.uid); 
        },
        resolve: (payload: OrderWhereUniqueInput, args: any, context: TenantContext, info: any) => {
            debugger;

            const { select } = context.prisma.getSelection(info).valueOf('data', 'Order', { select: {} });
            return context.prisma.order.findUnique({ where: payload, select })
                .then<OrderResponse, OrderResponse>((order) => ({
                    status: true,
                    message: "ok",
                    data: order as Order
                })).catch<OrderResponse>(({ message }) => ({
                    status: false,
                    message,
                }));
        }

    })
    orders(@Args("where") args, @Context() context: TenantContext, @Info() info) {
        // TODO test subscription then uncomment below checks
        //  if (context.auth?.uid) {       
        return this.pubSub.asyncIterator(`${ORDER_CHANGED}`, { args, context, info });
        //  }
    }


    @Subscription(() => InviteResponse,
        {
            filter: function (payload: InviteWhereUniqueInput,
                variables: { args: InviteWhereUniqueInput, context: TenantContext, info }) {
                return true;//payload != null && payload?.id == variables?.args?.id;
            },
            resolve: (payload: InviteWhereUniqueInput, args: any, context: TenantContext, info: any) => {
                const { select } = context.prisma.getSelection(info).valueOf('data', 'Invite', { select: {} });

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
                const { select } = context.prisma.getSelection(info).valueOf('data', 'Rating', { select: {} });

                return context.prisma.rating.findUnique({ where: payload, select })
                    .then<RatingResponse, RatingResponse>((rating) => ({
                        status: true,
                        message: "ok",
                        data: rating as Rating
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