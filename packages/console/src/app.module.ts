import { AppLoggerModule } from '@mechsoft/app-logger';
import { TenantContext } from '@mechsoft/common';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { FirebaseModule } from '@mechsoft/firebase-admin';
import { MailModule } from '@mechsoft/mailer';
import { PrismaClient } from '@mechsoft/prisma-client';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  GraphQLRequestContext,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener
} from 'apollo-server-plugin-base';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { join } from 'path';
import { AuthModule } from './app-schemas/auth/auth.module';
//import { AppUserModule } from './app-schemas/User/UserModule';
import { AuthMiddleware } from './auth.middleware';
import { authorizationManager, AuthorizerOptions } from './authorization';
import { BusinessRulesModule } from './business.module';
import modules from './schemas';





const PrismaConnectionManager: GraphQLRequestListener<TenantContext> = {
  
  /* didResolveSource?(
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
   ): ValueOrPromise<void>;
   // If this hook is defined, it is invoked immediately before GraphQL execution
   // would take place. If its return value resolves to a non-null
   // GraphQLResponse, that result is used instead of executing the query.
   // Hooks from different plugins are invoked in series and the first non-null
   // response is used.
   responseForOperation?(
     requestContext: GraphQLRequestContextResponseForOperation<TenantContext>,
   ): ValueOrPromise<GraphQLResponse | null>;
   executionDidStart?(
     requestContext: GraphQLRequestContextExecutionDidStart<TenantContext>,
   ):
     | GraphQLRequestExecutionListener
     | GraphQLRequestListenerExecutionDidEnd
     | void;
 */

  async willSendResponse(
    requestContext: GraphQLRequestContextWillSendResponse<TenantContext>,
  ) {
    //debugger;
    //console.log('willSendResponse');
    const { context, request, response } = requestContext;
    const { tenantId, prisma, logger,auth } = context;
    // const client = clients.get(tenantId);
    // const expired = Date.now() - client.start.getTime() >= 60000;
    // if (clients.size > 1 || expired) {
      
       await (context.enforcer.getAdapter() as PrismaAdapter).close()      
       await prisma.$disconnect();
      
    //   clients.delete(tenantId);
    //   // const arr:ClientValue[] = []
    //   //  clients.forEach((v, k) => {
    //   //    arr.push(v)
    //   //  })
    //   // const sorted= arr.sort((a,b)=>a.lastUsed.getTime()-a.lastUsed.getTime());
    //   // await sorted[0].client.$disconnect();
    logger?.debug(
      `Disconected from prisma server tenantId:${tenantId}`,
      'PrismaConnectionManager',
    );
   
    // }
  },
};

@Module({  
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    FirebaseModule,
    MailModule.forRoot({apikey:process.env.SENDGRID_API_KEY}),
    
    GraphQLModule.forRoot({
      typePaths: [
        './src/schemas/**/*.graphql',
        './src/app-schemas/**/*.graphql',
      ],
      // schemaDirectives: {
      //   auth: EnforcerDirective,
      // },
      plugins: [
        {
          requestDidStart(
            requestContext: GraphQLRequestContext<TenantContext>,
          ) {
            return PrismaConnectionManager;
          },
        },
      ],
      context: async ({ req }): Promise<TenantContext> => {
        // const p = new PC({
        //   log: ['error', 'warn'],
        // });
        
        const { token, logger,bloc,auth } = req;

        let client: PrismaClient;

        // if (token) {
        //   logger?.debug(`token ${token}`, GraphQLModule.name);
        //   const tenant = await p.tenant.findUnique({ where: { id: token } });
        //   await p.$disconnect();
        //   if (tenant && tenant.url) {
        //     //throw new GraphQLError(`Invalid tenant ${token}`);
        //     client = new PrismaClient({
        //       datasources: {
        //         db: {
        //           url: tenant.url,
        //         },
        //       },
        //       log: ['error', 'warn'],
        //     });
        //   }
        // }

        if (!client) {
          client = new PrismaClient({
            log: ['error', 'warn','query','info'],
          });
        }
        const enforcerOptions={
          path:'./src/authorization/rbac_model.conf',
          adapter: await PrismaAdapter.newAdapter({
              log: ['error', 'warn','query','info'],
            }) //(new PrismaAdapter()).setAdapter(client)
        }

       const enforcer = new CasbinService(enforcerOptions);
        const authOptions:AuthorizerOptions={
          tenantId: token ?? 'tenant.id',
          auth: auth,
          token: token,
          enforcer: enforcer,
          prisma: client,
          logger,
          businessRules: bloc
        }
        authorizationManager(authOptions);      
        
        const ctx: TenantContext = {
          tenantId: token ?? 'tenant.id',
          auth: req,
          token: token,
          enforcer: enforcer,
          prisma: client,
          logger,
        };
        
        
        return ctx;
      },
      transformSchema: (schema) => {
        const txt = printSchema(schema);

        writeFileSync(join(process.cwd(), 'src/models/schema.g.graphql'), txt);
        return schema;
      },
      debug: true,

      playground: true,
    }),
    
    /* ServeStaticModule.forRoot({
       rootPath: join(__dirname, '../', 'public'),
       exclude: ['/graphql', '/casbin-admin'],
 
     }),*/
    AppLoggerModule,
    // CasbinModule.forRootAsync({
    //   model: './src/authorization/rbac_model.conf',
    // }),
   ...modules,
  AuthModule,
  BusinessRulesModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/graphql');
  }
}
