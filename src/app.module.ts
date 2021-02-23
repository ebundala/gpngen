import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient as PC } from '@prisma/client';
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

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/schemas/**/*.graphql', './src/app-schemas/**/*.graphql'],
      // schemaDirectives: {
      //   auth: EnforcerDirective,
      // },
      context: async ({ req }): Promise<TenantContext> => {

        const p = new PC({
          log: ['query']
        });

        const tenant = await p.tenant.findUnique({ where: { id: "cklhb985e0000znqqajijdmwi" } });
        const ctx: TenantContext = {
          tenantId: req.tenantId,
          auth: req.auth,
          token: req.token,
          enforcer: req.enforcer,
          prisma: new PrismaClient({
            datasources: {
              db: {
                url: tenant.url
              }
            },
            log: ['query']
          },
            {
              tenantId: tenant.id,
              enforcer: req.enforcer,
              token: req.token,
              auth: req.auth,
              prisma: null

            })
        };

        return ctx;
      },
      transformSchema: (schema) => {
        const txt = printSchema(schema);

        writeFileSync(join(process.cwd(), 'src/models/schema.g.graphql'), txt)
        return schema;
      },
      debug: true,

      playground: true,
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