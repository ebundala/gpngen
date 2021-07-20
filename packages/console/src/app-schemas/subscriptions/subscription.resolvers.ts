import { Args, Context, Info, Mutation, Resolver, Subscription } from "@nestjs/graphql";
import { RedisPubSub } from "graphql-redis-subscriptions"
import { TenantContext } from "@mechsoft/common";
import { BatchPayload, Invite, InviteResponse, InviteWhereUniqueInput, LatLon, LocationResponse, Order, OrderResponse, OrderWhereUniqueInput, Rating, RatingResponse, RatingWhereUniqueInput, UserWhereUniqueInput } from "src/models/graphql";
import { FEEDBACK_RECEIVED, INVITE_RECEIVED, LOCATION_CHANGED, ORDER_CHANGED, SubscriptionService } from "./subscription.service";
import { AuthorizerGuard } from "@mechsoft/enforcer";
import { HttpException, UnauthorizedException, UseGuards } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";


@Resolver()
@UseGuards(AuthorizerGuard)
export class SubscriptionResolver {
    constructor(private readonly pubSub: RedisPubSub,
        private readonly bloc: SubscriptionService) { }

    @Subscription(() => OrderResponse, {
        filter: async (where: OrderWhereUniqueInput,
            variables, context: TenantContext) => {

            
            const { prisma, auth } = context;
            const order = await prisma.order.findUnique({
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
            return [order.organization.owner.id, order.owner.id, order.provider.id].includes(auth.uid);
        },
        resolve: (payload: OrderWhereUniqueInput, args: any, context: TenantContext, info: any) => {

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
        
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${ORDER_CHANGED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    }


    @Subscription(() => InviteResponse,
        {
            filter: async (where: InviteWhereUniqueInput,
                variables,context: TenantContext) =>{
                    const {auth,prisma} = context;
                  const invite = await prisma.invite.findUnique({where,
                select:{
                    inviteeId:true
                }})
                return invite.inviteeId == auth.id;
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
            return this.pubSub.asyncIterator(`${INVITE_RECEIVED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    }



    @Subscription(() => RatingResponse,
        {
            filter: async (where: RatingWhereUniqueInput,
                variables,context: TenantContext) =>{
                    const {auth,prisma} = context;
                 const order= await prisma.rating.findUnique({where,select:{
                      ownerId:true,  
                                          
                      organization:{
                          select:{
                              ownerId:true
                          }
                      }
                  }});
                return order.organization.ownerId ==auth.id;
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
            return this.pubSub.asyncIterator(`${FEEDBACK_RECEIVED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    }

    //location stream
    @Subscription(() => LocationResponse, {
        filter: async (where: UserWhereUniqueInput,
            variables, context: TenantContext) => {
           // ;
            //todo filter who recieves data;
            const { auth, prisma } = context
            const order = await prisma.order.findFirst({
                
                where: {
                    OR: [
                        {
                            ownerId: {
                                equals: auth.uid
                            },
                        },
                         {
                            providerId: {
                                equals: auth.uid
                            },
                        }, 
                        {
                            organization: {
                                ownerId: {
                                    equals: auth.uid
                                }
                            },
                        }
                    ],
                    AND:[
                        {
                            OR: [
                                {
                                    ownerId: {
                                        equals: where.id
                                    },
                                },
                                 {
                                    providerId: {
                                        equals: where.id
                                    },
                                }, 
                                {
                                    organization: {
                                        ownerId: {
                                            equals: where.id
                                        }
                                    },
                                },
                            ],
                        },
                         {

                        state: {
                            in: ['APPROVED', 'COMPLETED',] //listen only for dispatched orders/before payment
                        }
                    },]

                }
            })
            return order != null;
        },
        resolve: async function (this: SubscriptionResolver, where: UserWhereUniqueInput, args: any, context: TenantContext, info: any): Promise<LocationResponse | {}> {
          //  ;
            const key = `location/${where.id}`;
            const latlon = await this.bloc.getUserLocation(where.id);
            if (latlon) {
                const t = (new Date()).toUTCString();
                return {
                    message: "ok",
                    status: true,
                    data: {
                        id: key,
                        ...latlon,
                        createdAt: t,
                        updatedAt: t
                    },
                }
            }
            return {
                message: "No location data found",
                status: false,

            }
        }

    })
    locations(@Args("where") args: UserWhereUniqueInput, @Context() context: TenantContext, @Info() info) {
        if (context.auth?.uid) {
            return this.pubSub.asyncIterator(`${LOCATION_CHANGED}`, { args, context, info });
        }
        throw new UnauthorizedException()
    }

    @Mutation(() => LocationResponse)
    async locationFeed(@Args('location') location: LatLon, @Context() context: TenantContext, @Info() info): Promise<LocationResponse | {}> {
        
        if (context.auth?.uid && location) {
            await this.bloc.updateUserLocation(context.auth.uid, location);
            return {
                message: 'ok',
                status: true,
            }
        }
        throw new UnauthorizedException({
            message: 'Auth error',
            status: false,
        })

    }

}