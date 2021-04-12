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
import { AuthModule } from './app-schemas/auth/auth.module';
import { UploadDirective, UploadTypeResolver } from './app-schemas/directives/uploader.directive';
import { AuthMiddleware } from '@mechsoft/enforcer';
import { BusinessRulesManagerModule } from '@mechsoft/business-rules-manager';
import modules from './schemas';





const PrismaConnectionManager: GraphQLRequestListener<TenantContext> = {
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

    await (context.enforcer.getAdapter() as PrismaAdapter).close()
    await prisma.$disconnect();
    logger?.debug(
      `Disconected from prisma server tenantId:${tenantId}`,
      'PrismaConnectionManager',
    );
  },
};

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseModule,
    MailModule.forRoot({ apikey: process.env.SENDGRID_API_KEY }),

    GraphQLModule.forRoot({
      typePaths: [
        './src/schemas/**/*.graphql',
        './src/app-schemas/**/*.graphql',
      ],


      schemaDirectives: {
        file: UploadDirective,
      },
      resolvers: {
        Upload: UploadTypeResolver
      },
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

        const { token, logger, bloc, auth } = req;

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
            log: ['error', 'warn', 'query', 'info'],
          });
        }
        const enforcerOptions = {
          path: './src/authorization/rbac_model.conf',
          adapter: await PrismaAdapter.newAdapter({
            log: ['error', 'warn', 'query', 'info'],
          }) //(new PrismaAdapter()).setAdapter(client)
        }

        const enforcer = new CasbinService(enforcerOptions);
        enforcer.enableLog(true);
        await enforcer.loadPolicy();
        // const authOptions: AuthorizerOptions = {
        //   tenantId: token ?? 'tenant.id',
        //   auth: auth,
        //   token: token,
        //   enforcer: enforcer,
        //   prisma: client,
        //   logger,
        //   businessRules: bloc
        // }
       // authorizationManager(authOptions);

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
      debug: true,
      uploads: true,
      playground: true,
      extensions: []
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
    BusinessRulesManagerModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/graphql');
  }
}
