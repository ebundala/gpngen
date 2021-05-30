import { AppLoggerModule } from '@mechsoft/app-logger';
import { TenantContext } from '@mechsoft/common';
import { FirebaseModule } from '@mechsoft/firebase-admin';
import { MailModule } from '@mechsoft/mailer';
import { PrismaClient, PrismaClientMiddleware, PrismaClientModule } from '@mechsoft/prisma-client';
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
import { AuthMiddleware, CasbinModule, EnforcerMiddleware, PrismaAdapter } from '@mechsoft/enforcer';
import { BusinessRulesManagerModule,GqlContextInjectorModule } from '@mechsoft/business-rules-manager';
import modules from './schemas';
import { join } from 'path';





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
    FirebaseModule,
    AppLoggerModule,
    MailModule.forRoot({ apikey: process.env.SENDGRID_API_KEY }),
    CasbinModule.forRootAsync({
      model: './src/authorization/rbac_model.conf',
      adapterOptions: {
        log: ['error', 'info', 'query', 'warn']
      }
    }),
    PrismaClientModule,
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
            ctx: GraphQLRequestContext<TenantContext>,
          ) {

            return RequestLogger;
          },
        },
      ],
      context: async ({ req }): Promise<TenantContext> => {

        const { token, logger, enforcer, prisma, auth } = req;
        const ctx: TenantContext = {
          tenantId: token ?? 'tenant.id',
          auth: auth,
          token: token,
          enforcer: enforcer,
          prisma: prisma,
          logger,
          timestamp: Date.now()
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
 
    }), */
    ...modules,
    AuthModule,
    BusinessRulesManagerModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PrismaClientMiddleware, EnforcerMiddleware, AuthMiddleware).forRoutes('/graphql');
  }
}
