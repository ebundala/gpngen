import { AppLogger, AppLoggerModule } from '@mechsoft/app-logger';
import { TenantContext } from '@mechsoft/common';
import { FirebaseModule, FirebaseService } from '@mechsoft/firebase-admin';
import { MailModule } from '@mechsoft/mailer';
import { PrismaClient, PrismaClientModule } from '@mechsoft/prisma-client';
import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  GraphQLRequestContext,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener
} from 'apollo-server-plugin-base';
import { AuthModule } from './app-schemas/auth/auth.module';
import { UploadDirective, UploadTypeResolver } from './app-schemas/directives/uploader.directive';
import { CasbinModule, CasbinService } from '@mechsoft/enforcer';
import { BusinessRulesManagerModule } from '@mechsoft/business-rules-manager';
import modules from './schemas';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BusinessLogicModule } from './business-rules/busines.logic.module';
import { GraphhopperModule } from './app-schemas/graphhopper/graphhopper.module';
import { PubSubModule } from './pubsub/pubsub.module';
import { SubscriptionModule } from './app-schemas/subscriptions/subscription.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import IORedis from "ioredis";
import { RedisCache } from './pubsub/redis.service';
import {JSONObjectResolver} from 'graphql-scalars'




const RequestLogger: GraphQLRequestListener<TenantContext> = {

  /*
   didResolveSource?(
     requestContext: GraphQLRequestContextDidResolveSource<TenantContext>,
   ): ValueOrPromise<void>;
   parsingDidStart?(
     requestContext: GraphQLRequestContextParsingDidStart<TenantContext>,
   ): GraphQLRequestListenerParsingDidEnd | void;
   validationDidStart?(
     requestContext: GraphQLRequestContextValidationDidStart<TenantContext>,
   ): GraphQLRequestListenerValidationDidEnd | void;
   didResolveOperation?(
     requestContext: GraphQLRequestContextDidResolveOperation<TenantContext>,
   ): ValueOrPromise<void>;
   didEncounterErrors?(
     requestContext: GraphQLRequestContextDidEncounterErrors<TenantContext>,
   ): ValueOrPromise<void>;*/
  // If this hook is defined, it is invoked immediately before GraphQL execution
  // would take place. If its return value resolves to a non-null
  // GraphQLResponse, that result is used instead of executing the query.
  // Hooks from different plugins are invoked in series and the first non-null
  // response is used.
  // responseForOperation(
  //   requestContext: GraphQLRequestContextResponseForOperation<TenantContext>,
  // ): ValueOrPromise<GraphQLResponse | null> {
  //   debugger;
  //   console.log('responseForOperation');
  //   return null
  // },
  /*  executionDidStart?(
      requestContext: GraphQLRequestContextExecutionDidStart<TenantContext>,
    ):
      | GraphQLRequestExecutionListener
      | GraphQLRequestListenerExecutionDidEnd
      | void;
  */

  async willSendResponse(
    requestContext: GraphQLRequestContextWillSendResponse<TenantContext>,
  ) {
    const { context, request, response } = requestContext;
    const { tenantId, prisma, logger, auth } = context;

    //await (context.enforcer.getAdapter() as PrismaAdapter).close()
    //  await prisma.$disconnect();
    const time = Date.now() - (context.timestamp ?? Date.now());
    logger?.debug(
      `Request took ${time}/ms to complete for tenantId:${tenantId}`,
      'RequestLogger'
    );
  },
};

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppLoggerModule,
    PubSubModule,
    GraphQLModule.forRootAsync({
      imports: [
        FirebaseModule,
        MailModule.forRoot({ apikey: process.env.SENDGRID_API_KEY }),
        GraphhopperModule.forRoot("http://graphhopper:8989/route"),
        PrismaClientModule,
        CasbinModule.forRootAsync({
          model: './src/authorization/rbac_model.conf',
          adapterOptions: {
            log: ['error', 'info', 'query', 'warn']
          }
        }),
        AppLoggerModule,
        AuthModule,
        ...modules,
        BusinessRulesManagerModule,
        BusinessLogicModule,
        SubscriptionModule,
       
      ],
      inject: [PrismaClient, CasbinService, FirebaseService,AppLogger,RedisCache],
      useFactory: (client: PrismaClient,
        enforcer: CasbinService,
        app: FirebaseService,
        logger: AppLogger,
        redisCache: RedisCache 
        ) => {
          debugger

          return {
          typePaths: [
            './src/schemas/**/*.graphql',
            './src/app-schemas/**/*.graphql',
          ],
         schemaDirectives: {
           file: UploadDirective,
         },
        //  typeDefs:[
        //    JSONDefinition,
        //  ],
         resolvers: {
           Upload: UploadTypeResolver,
           JSONObject:JSONObjectResolver
         },
          //  plugins: [   
          //   {
          //     requestDidStart:(
          //       ctx: GraphQLRequestContext<TenantContext>,
          //     ) =>{

          //       return RequestLogger;
          //     },
          //   },
          //  ],
          context: async (data): Promise<TenantContext> => {
            debugger
            const [realm,token]=(data.req?.headers?.authorization??data.connection?.context?.headers?.authorization)?.split(" ")??["",""]
            const auth = await app.app.auth().verifySessionCookie(token).catch((e)=>({uid:null}));
             if(auth?.uid){
              logger.debug(await redisCache.get(`lastseen-${auth.uid}`),"Presence");
              redisCache.set(`lastseen-${auth.uid}`,Date.now());
             }
            //const { token, logger, enforcer, prisma, auth } = req ?? connection?.context;
            //TODO: remove this after test/dev
            enforcer.enableEnforce(false);
            const ctx: TenantContext = {
              tenantId: auth?.uid,
              auth: auth,
              token: token,
              enforcer: enforcer,
              prisma: client,
              logger,
              timestamp: Date.now()
            };
            return ctx;


          },
          subscriptions: {
            onConnect: async (connectionParams,socket,context) => {
              
             //TODO make sure authorization is passed according to ws
              const headers =   {authorization:connectionParams["authorization"]};
              return { connectionParams, headers};   

            }
            ,
            onDisconnect: async (webSocket,context)=>{
              logger.debug(await redisCache.get("lastseen-xxx"),"Presence");
              await redisCache.set("lastseen-xxx",Date.now());
            }
          },
          
          debug: true,
          uploads: true,
          installSubscriptionHandlers: true,
          playground: true,
          extensions: []
        };
      }
    }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
      exclude: ['/graphql', '/casbin-admin'],

    }),
    
   

  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(PrismaClientMiddleware, EnforcerMiddleware, AuthMiddleware).forRoutes('/graphql');
  }
}
