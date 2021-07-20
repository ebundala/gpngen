import { AppLogger } from "@mechsoft/app-logger";
import { Bloc, BlocAttach, BlocFieldResolver, BlocValidate, BusinessRequest, DataloaderArg, PrismaAttach, PrismaHookHandler, PrismaHookRequest } from "@mechsoft/business-rules-manager";
import { DataloaderCtx } from "@mechsoft/business-rules-manager";
import { TenantContext } from "@mechsoft/common";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, State } from "@prisma/client";
import * as DataLoader from "dataloader";
import { Organization, User } from "src/models/graphql";
import { RedisCache } from "src/pubsub/redis.service";
import { uploadFile } from "src/utils/file.utils";
import {
  canCreateOnlyOneOrganization, isUserSensitiveInfo,
  onlyConnectActiveOffers, onlyConnectOwnerSelf,
  onlyConsumerCanCompleteOrder,
  onlyOwnerOrProviderOrManagerCanUpdateOrder,
  onlyOwnerhasAccess,
  onlyProviderAndManagerCanProcessOrder,
  onlyServiceOfferedByOrg,
  onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization,
  onlyOneRatingPerConsumerOrganizationPair,
  onlyOwnerOfRecordAllowed,
  uniqueEmailPerAccount
} from '../rules.definitions';

@Injectable()
@Bloc()
export class BusinessLogicService {
  constructor(
    private readonly logger: AppLogger,
    private readonly redisCache: RedisCache
  ) {
    //this.logger.setContext(BusinessLogicService.name);
    
  }

  @BlocAttach('findManyOrganization.input.where.location.within')
  @BlocAttach('findManyOrganization.input.where.location.nearBy.lat')
  @BlocAttach('findManyOrganization.input.where.location.nearBy.lon')
  @BlocAttach('findManyOrganization.input.where.location.notWithin')
  async organizationLocationQuery(v: BusinessRequest<TenantContext>, next) {
    
    if (v.context['organizationLocationQuery']) {
      //if excuted return without re excuting
      return next(v)
    }
    const { args, context } = v;
    const { prisma, logger } = context;
    const { location, ...others } = args.where;
    const { nearBy, within, notWithin, } = location;
    const { skip, take } = args;
    const { every,some } = args.where.offers ?? {}
    let categories = [], notCategories = [];
    if (some?.id?.equals) {
      categories.push(every.id.equals)
    }
    if (some?.id?.in) {
      categories.push(...every.id.in)
    }
    if (some?.id?.notEqual) {
      notCategories.push(every.id.notEqual)
    }
    if (some?.id?.notIn) {
      notCategories.push(...every.id.notIn)
    }

    const gisQuery = (prisma,
      categories: string[],
      notCategories: string[],
      nearBy: { lat: number, lon: number },
      within?: number, notWithin?: number,
      offset?: number, limit?: number) => {

      //TODO handle cursor pagenation
      return prisma.$queryRaw`SELECT 
          id,
          distance
          FROM 
        (SELECT 
         "Organization".id as id,
         ST_Distance(
          ST_SetSRID(ST_MakePoint(${nearBy.lon}, ${nearBy.lat}), 4326),
            "Location".geom) as distance
         FROM "Organization" 
         INNER JOIN "_OrganizationToServiceCategory"
         ON "Organization"."id"="_OrganizationToServiceCategory"."A" 
         INNER JOIN "Location"
         ON "Organization"."locationId"="Location".id 
         ${categories.length || notCategories.length ? Prisma.sql`WHERE ` : Prisma.empty}
         ${categories.length ? Prisma.sql`"_OrganizationToServiceCategory"."B" 
         in (${Prisma.join(categories)})` : Prisma.empty}
         ${categories.length && notCategories.length ? Prisma.sql`AND` : Prisma.empty}
         ${notCategories.length ? Prisma.sql`WHERE "_OrganizationToServiceCategory"."B" 
         not in (${Prisma.join(notCategories)})` : Prisma.empty}
        ) AS orgs
        ${within || notWithin ? Prisma.sql`WHERE distance ${within >= 0 ? Prisma.sql` <= ${within}` : notWithin >= 0 ? Prisma.sql` >= ${notWithin}` : Prisma.empty}` : Prisma.empty}
        ORDER BY distance ASC ${offset >= 0 ? Prisma.sql`OFFSET ${offset}` : Prisma.empty} ${limit >= 0 ? Prisma.sql`LIMIT ${limit}` : Prisma.empty}`
    }

    const orgs = await gisQuery(prisma, categories, notCategories, nearBy, within, notWithin, skip, take);
    
    //await this.redisCache.set(`distances`,JSON.stringify(orgs),"PX",5000);
    v.context["distances"] = orgs;
    v.args.where = { id: { in: orgs.map((o) => o.id) }, ...others };

    v.context['organizationLocationQuery'] = true //mark excuted 
    return next(v)

  }

  @BlocAttach('signup.input.organization.location.create.lat')
  async businessLocation(v: BusinessRequest<TenantContext>, next) {

    
    const { args, context } = v;
    const { prisma, logger } = context;
    const { organization, ...rest } = args;
    const { location, ...others } = organization
    const { name, lat, lon } = location.create;
    const loc = await prisma.location.create({
      data: { name, lat, lon }
    });
    if (loc && loc.id) {
      //create a geom here
      const affected = await prisma.$executeRaw`UPDATE "Location" 
          SET 
          geom=ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326)
          where id=${loc.id};`;
      if (affected) {
        //update input to link to new location
        const input = {
          ...others,
          location: {
            connect: { id: loc.id }
          }
        }
        v.args = { ...rest, organization: input }
      } else {
        throw new HttpException('Failed to create location', HttpStatus.BAD_REQUEST)
      }
    }
    
    return next(v)
  }

  @BlocAttach('signup.input.credentials.avator')
  async avator(v: BusinessRequest, next) {
    const { args, context } = v;
    const { credentials, ...rest } = args;
    const { avator } = credentials
    const file = await uploadFile(avator)
    const avator2 = await context.prisma.attachment.create({ data: { ...file } })

    if (avator2 && avator2.id) {
      v.args.credentials.avator = { connect: { id: avator2.id } };
    }
    return next(v)
  }

  @BlocAttach('signup.input.organization.logo.create.path')
  async logo(v: BusinessRequest<TenantContext>, next) {
    const { args, context } = v;
    const { organization } = args;
    const file = await uploadFile(organization.logo.create.path)
    const logo = await context.prisma.attachment.create({ data: { ...file } })
    if (logo && logo.id) {
      v.args.organization.logo = { connect: { id: logo.id } }
    }
    return next(v)
  }

  @BlocAttach('updateOneService.input.data.image.create.path')
  @BlocAttach('createOneService.input.data.image.create.path')
  async serviceImage(v: BusinessRequest, next) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { image } = data
    const file = await uploadFile(image.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.image = { connect: { id: file2.id } };
    }
    return next(v)
  }

  @BlocAttach('updateOneUser.input.data.avator.create.path')
  async updateAvator(v: BusinessRequest, next) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { avator } = data
    const file = await uploadFile(avator.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.avator = { connect: { id: file2.id } };
    }
    return next(v)
  }

  @BlocAttach('updateOneUser.input.data.location.create.lat')
  async createUserLocation(v: BusinessRequest, next) {
    
    const { args, context } = v;
    const { prisma, logger } = context;
    const { data, ...rest } = args;
    const { location, ...others } = data
    const { name, lat, lon } = location.create;
    const loc = await prisma.location.create({
      data: { name, lat, lon }
    });
    if (loc && loc.id) {
      //create a geom here
      const affected = await prisma.$executeRaw`UPDATE "Location" 
            SET 
            geom=ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326)
            where id=${loc.id};`;
      if (affected) {
        //todo update input to link to new location
        const inputs = {
          ...others,
          location: {
            connect: { id: loc.id }
          }
        }
        v.args = { ...rest, data: inputs }
      } else {
        throw new HttpException('Failed to create location', HttpStatus.BAD_REQUEST)
      }
    }
    
    return next(v)
  }


  @BlocAttach('updateOneOrganization.input.data.logo.create.path')
  @BlocAttach('createOneOrganization.input.data.logo.create.path')
  async organizationImage(v: BusinessRequest, next) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { logo } = data
    const file = await uploadFile(logo.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.logo = { connect: { id: file2.id } };
    }
    return next(v)
  }
  @BlocAttach('updateOneOrganization.input.data.location.create.lat')
  @BlocAttach('createOneOrganization.input.data.location.create.lat')
  async organizationLocation(v: BusinessRequest<TenantContext>, next) {

    
    const { args, context } = v;
    const { prisma, logger } = context;
    const { data, ...rest } = args;
    const { location, ...others } = data
    const { name, lat, lon } = location.create;
    const loc = await prisma.location.create({
      data: { name, lat, lon }
    });
    if (loc && loc.id) {
      //create a geom here
      const affected = await prisma.$executeRaw`UPDATE "Location" 
          SET 
          geom=ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326)
          where id=${loc.id};`;
      if (affected) {
        //todo update input to link to new location
        const inputs = {
          ...others,
          location: {
            connect: { id: loc.id }
          }
        }
        v.args = { ...rest, data: inputs }
      } else {
        throw new HttpException('Failed to create location', HttpStatus.BAD_REQUEST)
      }
    }
    
    return next(v)
  }

  @BlocAttach('updateOneOrder.input.data.receipt.create.path')
  //TODO investigate further not needed maybe for create scenario
  @BlocAttach('createOneOrder.input.data.receipt.create.path')
  async orderReceipt(v: BusinessRequest, next) {
    
    const { args, context } = v;
    const { data, ...rest } = args;
    const { receipt } = data
    const file = await uploadFile(receipt.create.path)
    const file2 = await context.prisma.attachment.create({ data: { ...file } })

    if (file2 && file2.id) {
      v.args.data.receipt = { connect: { id: file2.id } };
    }
    return next(v)
  }

  //Validation rules
  @BlocValidate('signup.input.credentials.email')
  async oneEmailPerAccount(v: BusinessRequest<TenantContext>) {
    const { args, context } = v;
    const { credentials } = args;
    const { prisma } = context;
    const facts = await prisma.user.findUnique({ where: { email: credentials.email }, select: { email: true } })
    return { rules: [uniqueEmailPerAccount(credentials.email)], facts }
  }
  @BlocValidate('updateOneRating')
  async updateOneRatingBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { where } = args;
    const { prisma, auth } = context;
    const rating = await
      prisma.rating.findUnique({
        where: { id: where.id },
        select: {
          owner: {
            select: { id: true }
          }
        }
      });

    const ownerRule = onlyOwnerOfRecordAllowed(auth.uid)
    return { rules: [ownerRule], facts: rating }
  }

  @BlocValidate('findUniqueUser')
  async findUniqueUserBloc(v: BusinessRequest) {

    
    const { args, context } = v;
    const { where } = args;
    const { auth, select } = context;
    const facts = { ...select.data.select, ...auth };
    return { rules: [isUserSensitiveInfo(where.id)], facts }
  }
  @BlocValidate('updateOneUser')
  async updateOneUserBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { where } = args;
    const { auth } = context;
    return { rules: [onlyOwnerhasAccess(where.id)], facts: auth }
  }

  @BlocValidate('createOneOrganization')
  async createOneOrganizationBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { data } = args;
    const { prisma, auth } = context;
    const user = await prisma.user.findUnique({ where: { id: auth.uid }, include: { organizations: true } })
    const serviceCategories = await prisma.serviceCategory.findMany({
      where: { state: State.APPROVED },
      select: { id: true }
    }).map((v) => v.id);
    const facts = { ...user, ...data, /*offers: { connect: { id: data?.offers?.connect[0]?.id } }*/ }
    return {
      rules: [
        onlyConnectOwnerSelf(auth.uid),
        onlyConnectActiveOffers(serviceCategories),
        canCreateOnlyOneOrganization()],
      facts
    };

  }

  @BlocValidate('createOneOrder')
  async createOneOrderBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { data } = args;
    const { prisma, auth } = context;
    
    const service = await prisma.service.findFirst({
      where: {
        id: data?.service?.connect?.id,
        AND: {
          state: State.APPROVED
        }
      },
      select: { id: true, state: true, organization: { select: { id: true,/* state:true */ } } }
    });

    return {
      rules: [
        onlyConnectOwnerSelf(auth.uid),
        onlyServiceOfferedByOrg(service?.id, service?.organization?.id)
      ], facts: data
    }
  }

  @BlocValidate('updateOneOrder')
  async updateOneOrderBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { where, data } = args;
    const { prisma, auth } = context;

    const order = await prisma.order.findUnique({
      where: {
        id: where?.id,
      },
      select: {
        id: true,
        state: true,
        owner: {
          select: {
            id: true
          }
        },
        organization: {
          select: {
            id: true,
            staffs: {
              select: { id: true }
            },
            owner: {
              select: {
                id: true
              }
            }
          }
        }
      }
    });
    //TODO prevent updating quantity for approved orders
    //TODO add a concept of service provider based on services for organization 
    const facts = { ...auth, state: data?.state?.set };
    return {
      rules: [
        onlyOwnerOrProviderOrManagerCanUpdateOrder(
          order?.owner?.id,
          order?.organization?.owner?.id,
          order?.organization?.staffs?.map((v) => v.id)),
        onlyProviderAndManagerCanProcessOrder(order?.owner?.id),
        onlyConsumerCanCompleteOrder(order?.owner?.id)
      ], facts
    };

  }

  @BlocValidate('createOneRating')
  async createOneRatingBloc(v: BusinessRequest) {
    const { args, context } = v;
    const { data } = args;
    const { prisma, auth } = context;

    const { orders, ratings } = (await
      prisma.user.findUnique({
        where: {
          id: auth.uid,
        },
        select: {
          id: true,
          ratings: {
            where: {
              organizationId: data?.organization?.connect?.id,
              AND: {
                ownerId: auth.uid
              }
            },
            select: {
              id: true
            }
          },
          orders: {
            where: {
              organization: {
                id: data?.organization?.connect?.id
              },
              AND: {
                OR: [
                  { state: State.REJECTED },
                  { state: State.COMPLETED }
                ]
              }

            },
            select: { id: true, state: true }
          }
        }
      })) ?? {};

    const ordersRule = onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization()
    const connectSelf = onlyConnectOwnerSelf(auth.uid);
    const onlyOneRating = onlyOneRatingPerConsumerOrganizationPair();
    const facts = { owner: data?.owner, orders: orders ?? [], ratings: ratings ?? [] };
    return { rules: [connectSelf, ordersRule, onlyOneRating], facts };
  }

  

  //PRISMA hooks to manipulate data

  @PrismaAttach('Organization', "findUnique")
  @PrismaAttach('Organization', "findFirst")
  async findUniqueOrganization(args: PrismaHookRequest<Organization>, n: PrismaHookHandler) {
    const { prisma, params, result, context } = args;
    //const pArgs: Prisma.OrganizationFindUniqueArgs = params.args;
    // TODO aggregate rating of orgnization
    const ratings = await prisma.rating.groupBy({
      by: ['organizationId'],
      _avg: {
        value: true
      },
      where: {
        organization: {
          id: {
            equals: result.id
          }
        }
      }
    })
    // TODO aggregate min price
    const prices = await prisma.service.groupBy({
      by: ['organizationId'],
      _min: {
        price: true
      },
      where: {
        organization: {
          id: {
            equals: result.id
          }
        }
      }
    })
    // TODO agregate number of deals done 
    const deals = await prisma.order.groupBy({
      by: ['organizationId'],
      _count: {
        id: true
      },
      where: {
        state: {
          equals: State.COMPLETED
        },
        organization: {
          id: {
            equals: result.id
          }
        },

      }
    });
    // TODO aggregate distance from requester



    let work = deals.find((d) => d.organizationId === result.id);
    let min = prices.find((p) => p.organizationId == result.id);
    let rate = ratings.find((r) => r.organizationId);

    const res = {
      ...result,
      compoundRating: rate?._avg?.value ?? 0,
      workCompleted: work?._count?.id ?? 0,
      minPrice: min?._min?.price ?? 0,
      distance: 0
    }

    args.result = res;
    return n(args);
  }


  @PrismaAttach('Organization', "findMany")
  async findManyOrganization(args: PrismaHookRequest<Organization[]>, n: PrismaHookHandler) {
    const { prisma, params, result, context } = args;
    const pArgs: Prisma.OrganizationFindManyArgs = params.args;

    const ids = result.map((e) => e.id);
    
    // TODO aggregate rating of orgnization
    const ratings = await prisma.rating.groupBy({
      by: ['organizationId'],
      _avg: {
        value: true
      },
      where: {
        organization: {
          id: {
            in: ids
          }
        }
      }
    })
    // TODO aggregate min price
    const prices = await prisma.service.groupBy({
      by: ['organizationId'],
      _min: {
        price: true
      },
      where: {
        organization: {
          id: {
            in: ids
          }
        }
      }
    })
    // TODO agregate number of deals done 
    const deals = await prisma.order.groupBy({
      by: ['organizationId'],
      _count: {
        id: true
      },
      where: {
        state: {
          equals: State.COMPLETED
        },
        organization: {
          id: {
            in: ids
          }
        },

      }
    });
    


    let res = result.map((v) => {
      let work = deals.find((d) => d.organizationId === v.id);
      let min = prices.find((p) => p.organizationId == v.id);
      let rate = ratings.find((r) => r.organizationId == v.id);
     
      return {
        ...v,
        compoundRating: rate?._avg?.value ?? 0,
        workCompleted: work?._count?.id ?? 0,
        minPrice: min?._min?.price ?? 0,
        distance: 0
      }
    });
    args.result = res;
    return n(args);
  }

  @BlocFieldResolver("Organization","distance")
  distance(org:Organization,args,ctx:TenantContext,info:any){
    const distances = ctx["distances"]??[];
    if(distances){
     return distances.find((d)=>d.id==org.id)?.distance??0
    }
    return 0;
  }
@BlocFieldResolver("User","location")
  async userLocation(user:User,args,ctx:TenantContext,info:any){
    const {auth}=ctx;
    if(auth){
     //todo get user location from cache
    }
    return user.location;
  }
  @BlocFieldResolver("User","lastSeen",function(this:BusinessLogicService,...args){
    return new DataLoader(async function (keys){
      

      const lastseen= await this.redisCache.mget(keys);
      return lastseen;
    })
  })
  async lastSeen(parent:User,args,@DataloaderCtx() ctx:TenantContext,info:any,
  @DataloaderArg() dataloader:DataLoader<string,string>) {
    debugger;
    // const {auth} = ctx;
    // const key = `last-seen-${parent.id}`;
    // const lastseen= await this.redisCache.get(key);
    // this.logger.debug(`lastseen-${parent.id} ${lastseen}`);
    // return lastseen;
    return dataloader.load(parent.id)
  }

}