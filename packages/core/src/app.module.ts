import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppUserModule } from './app-schemas/User/UserModule';
//import { GraphQLModule } from '@nestjs/graphql';
import { AuthMiddleware } from './auth.middleware';
import { AppLoggerModule } from './modules/app-logger/app-logger.module';
import { CasbinAdminModule } from './modules/casbin-admin/casbin-admin.module';
import { CasbinModule } from './modules/casbin-enforcer/casbin.module';
import { PrismaClientModule } from './modules/prisma-client/prisma-client.module';
import modules from './schemas';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/schemas/**/*.graphql', './src/app-schemas/**/*.graphql'],
      // transformSchema: (schema) => {

      //   return mergeSchemas({
      //     schemas: [
      //       schema,
      //     ],
      //   });
      // },
      context: ({ req }) => {
        return { auth: req.auth, token: req.token };
      },
      debug: true,

      playground: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
      exclude: ['/graphql', '/casbin-admin'],

    }),
    PrismaClientModule,
    AppLoggerModule,
    CasbinModule.forRootAsync({
      model: './src/authorization/rbac_model.conf'
    }),
    CasbinAdminModule,
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