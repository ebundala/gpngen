import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient as PC } from '@prisma/client';
import { GraphQLRequestContext, GraphQLRequestContextWillSendResponse, GraphQLRequestListener } from 'apollo-server-plugin-base';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { join } from 'path';
import { AppUserModule } from './app-schemas/User/UserModule';
import { AuthMiddleware } from './auth.middleware';
import { TenantContext } from './context';
import { AppLoggerModule } from './modules/app-logger/app-logger.module';
import { CasbinAdminModule } from './modules/casbin-admin/casbin-admin.module';
import { CasbinModule } from './modules/casbin-enforcer/casbin.module';
import { PrismaClient } from './modules/prisma-client/prisma-client-service';
import { PrismaClientModule } from './modules/prisma-client/prisma-client.module';
import modules from './schemas';
type ClientValue = { k: string, start: Date, lastUsed: Date, client: PrismaClient };
type ClientsList = Map<string, ClientValue>
const clients: ClientsList = new Map();
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
    debugger
    //console.log('willSendResponse');
    const { context, request, response } = requestContext
    const { tenantId, prisma } = context;
    // const client = clients.get(tenantId);
    // const expired = Date.now() - client.start.getTime() >= 60000;
    // if (clients.size > 1 || expired) {
    await prisma.$disconnect()
    //   clients.delete(tenantId);
    //   // const arr:ClientValue[] = []
    //   //  clients.forEach((v, k) => {
    //   //    arr.push(v)
    //   //  })
    //   // const sorted= arr.sort((a,b)=>a.lastUsed.getTime()-a.lastUsed.getTime());
    //   // await sorted[0].client.$disconnect();
    console.log('Disconected from prisma server:');
    // }


  }
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/schemas/**/*.graphql', './src/app-schemas/**/*.graphql'],
      // schemaDirectives: {
      //   auth: EnforcerDirective,
      // },
      plugins: [
        {
          requestDidStart(
            requestContext: GraphQLRequestContext<TenantContext>,
          ) {
            return PrismaConnectionManager
          }
        }
      ],
      context: async ({ req }): Promise<TenantContext> => {

        const p = new PC({
          // log: ['query']
        });

        const tenant = await p.tenant.findUnique({ where: { id: "cklihv2gt0000v8r7dgjy08qm" } });
        await p.$disconnect();
        //  if (clients.size < 1 || !clients.has(tenant.url)) {
        const client = new PrismaClient({
          datasources: {
            db: {
              url: tenant.url
            }
          },
          log: ['error', 'warn']
        },
          {
            tenantId: tenant.url,
            enforcer: req.enforcer,
            token: req.token,
            auth: req.auth,
            prisma: null

          });
        //  const n = new Date()
        //  clients.set(tenant.url, { k: tenant.url, start: n, lastUsed: n, client })
        // } else {
        //  clients.get(tenant.url).lastUsed = new Date()
        //  }

        //await client.$connect();
        const ctx: TenantContext = {
          tenantId: tenant.url,
          auth: req.auth,
          token: req.token,
          enforcer: req.enforcer,
          prisma: client//s.get(tenant.url).client
        };

        return ctx;
      },
      transformSchema: (schema) => {
        const txt = printSchema(schema);

        writeFileSync(join(process.cwd(), 'src/models/schema.g.graphql'), txt)
        return schema;
      },
      debug: false,

      playground: false,
    }),
    /* ServeStaticModule.forRoot({
       rootPath: join(__dirname, '../', 'public'),
       exclude: ['/graphql', '/casbin-admin'],
 
     }),*/
    PrismaClientModule,
    AppLoggerModule,
    CasbinModule.forRootAsync({
      model: './src/authorization/rbac_model.conf'
    }),

    //CasbinAdminModule,
    ...modules,
    AppUserModule,
    CasbinAdminModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/graphql')
  }
}

