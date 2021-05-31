import { AppLogger, AppLoggerModule } from "@mechsoft/app-logger";
import { PrismaClient} from "@mechsoft/prisma-client";
import { GqlExecutionContext } from '@nestjs/graphql';
import { Global, Module, OnModuleInit } from "@nestjs/common";
import { DiscoveryModule, DiscoveryService } from "@nestjs/core";
import { BusinessRulesManager, PrismaHookRequest } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_CONTAINER, BUSINESS_LOGIC_HOOK, BUSINESS_LOGIC_VALIDATOR, PRISMA_LOGIC_HOOK } from './constants';
import { CONTEXT } from '@nestjs/graphql';
import { GqlContextInjectorModule } from "./gql-context-injector.module";
import { GqlContextInjector } from "./context-injector";
import { Prisma } from "@prisma/client";
@Global()
@Module(
    {
        imports: [DiscoveryModule, AppLoggerModule],
        providers: [BusinessRulesManager],
        exports: [BusinessRulesManager],
    }
)
export class BusinessRulesManagerModule implements OnModuleInit {
    constructor(private readonly discovery: DiscoveryService,
        private readonly bloc: BusinessRulesManager,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(BusinessRulesManager.name)
    }
    getMethods(obj) {
        let properties = new Set<string>()
        let currentObj = obj
        do {
            Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
        } while ((currentObj = Object.getPrototypeOf(currentObj)))
        return [...properties.keys()].filter(item => typeof obj[item] === 'function')
    }

    onModuleInit() {
        this.logger.setContext(BusinessRulesManager.name)
        const wrappers = this.discovery.getProviders();
        debugger;
        let prismaWrapper=wrappers.find((v)=>v.instance instanceof PrismaClient);
        const prismaClient:PrismaClient = prismaWrapper?.instance;
        if(prismaClient){

            const cb:Prisma.Middleware = async (params,next)=>{
                debugger
                const{action,model}=params;              
                const rule=`${model}:${action}`;
              let hookReq: PrismaHookRequest<any>={
                  params,
                  result:null,
                  rules:[rule],
                  prisma: prismaClient
                  
              }
               //handle pre prisma hooks
              hookReq = await this.bloc.handlePrismaHookRequest(hookReq,true);
              hookReq.result=await next(hookReq.params);

              debugger
              //handle post prisma hooks
              hookReq = await this.bloc.handlePrismaHookRequest(hookReq);
              return hookReq.result;
            }
          prismaClient.$use(cb)
        }

        const blocProviders = wrappers
            .filter((wrapper) => wrapper.metatype && Reflect.getMetadata(BUSINESS_LOGIC_CONTAINER, wrapper.metatype))

        blocProviders.forEach((b) => {
            const i = b.instance;
            const methods = this.getMethods(i)

            methods.forEach((s) => {
                const method = i[s];
                const validators: string[] = Reflect.getMetadata(`${BUSINESS_LOGIC_VALIDATOR}/${s}`, BusinessRulesManager)
                const hooks: string[] = Reflect.getMetadata(`${BUSINESS_LOGIC_HOOK}/${s}`, BusinessRulesManager)
                const prismaHooks: string[]=Reflect.getMetadata(`${PRISMA_LOGIC_HOOK}/${s}`, BusinessRulesManager)
                debugger

                if (hooks?.length) {
                    //it is a hook 
                    for (let i = 0; i < hooks.length; i++) {
                        this.bloc.at(hooks[i], method);
                        this.logger.log(`BLOC Hook: ${hooks[i]}`)
                    }
                }
                if (validators?.length) {
                    //it is a validator
                    for (let i = 0; i < validators.length; i++) {

                        this.bloc.on(validators[1], method)
                        this.logger.log(`BLOC Validator: ${validators[i]}`)
                    }
                    }
                if (prismaHooks?.length) {
                        //it is a prisma hook
                        for (let i = 0; i < prismaHooks.length; i++) {
    
                            this.bloc.when(prismaHooks[i], method)
                            this.logger.log(`PRISMA hook: ${prismaHooks[i]}`)
                        }
                }

            })
        })


    }

}
