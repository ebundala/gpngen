import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppLoggerModule } from './modules/app-logger/app-logger.module';
import { PrismaClientModule } from './modules/prisma-client/prisma-client.module';
import modules from './schemas';
@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./src/schemas/**/*.graphql'],
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

    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../', 'public'),
    //   exclude: ['/graphql'],
    // }),
    PrismaClientModule,
    AppLoggerModule,
    ...modules
  ],
})
export class AppModule { }
