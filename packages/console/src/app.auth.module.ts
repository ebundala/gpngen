import { AppLoggerModule } from "@mechsoft/app-logger";
import { TenantContext } from "@mechsoft/common";
import { CasbinService, PrismaAdapter } from "@mechsoft/enforcer";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaClient } from "@mechsoft/prisma-client";
import { AuthMiddleware } from "./auth.middleware";
import { ConfigModule } from "@nestjs/config";
import { FirebaseModule } from "@mechsoft/firebase-admin";
import { AuthModule } from "./app-schemas/auth/auth.module";
import { BusinessRulesManagerModule } from "./business-rules/business-rules-manager.module";
import { MailModule } from "@mechsoft/mailer";
import modules from './schemas';
import { createPolicySchema } from "../prisma/rule.ast";
import { SchemaDefinitionNode } from "graphql";
import { PolicyModule } from "./authorization/policy/PolicyModule";



@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        FirebaseModule,
        MailModule.forRoot({ apikey: process.env.SENDGRID_API_KEY }),
        GraphQLModule.forRoot({
            // path: '/_policies',
            typePaths: [
                './src/authorization/policy/policy.graphql'
                //'./src/models/policy.graphql'
                //'./src/schemas/**/*.graphql',
                // './src/app-schemas/**/*.graphql',
            ],
            // transformSchema: (schema) => {
            //     debugger
            //     return schema;
            // },
            context: async ({ req }): Promise<TenantContext> => {
                const { token, logger, bloc, auth } = req;
                let client: PrismaClient;
                if (!client) {
                    client = new PrismaClient({
                        log: ['error', 'warn', 'query', 'info'],
                    });
                }
                const enforcerOptions = {
                    path: './src/authorization/rbac_model.conf',
                    adapter: await PrismaAdapter.newAdapter({
                        log: ['error', 'warn', 'query', 'info'],
                    })
                }

                const enforcer = new CasbinService(enforcerOptions);
                enforcer.enableLog(true);
                await enforcer.loadPolicy();
                const ctx: TenantContext = {
                    tenantId: token ?? 'tenant.id',
                    auth: req.auth,
                    token: token,
                    enforcer: enforcer,
                    prisma: client,
                    logger,
                };


                return ctx;
            },
            debug: true,
            uploads: false,
            playground: true,

        }),

        /* ServeStaticModule.forRoot({
           rootPath: join(__dirname, '../', 'public'),
           exclude: ['/graphql', '/casbin-admin'],
     
         }),*/
        AppLoggerModule,
        //AuthModule,
        BusinessRulesManagerModule,
        PolicyModule
        //...modules
    ]
})
export class AppAuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes('/graphql');
    }
}