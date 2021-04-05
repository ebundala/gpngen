import { AppLogger, AppLoggerModule } from "@mechsoft/app-logger";
import { Global, Module, OnModuleInit } from "@nestjs/common";
import { DiscoveryModule, DiscoveryService } from "@nestjs/core";
import { BusinessRulesManager } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_CONTAINER, BUSINESS_LOGIC_HOOK, BUSINESS_LOGIC_VALIDATOR } from './constants';
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
        private readonly logger: AppLogger
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
        const wrappers = this.discovery.getProviders();

        const blocProviders = wrappers
            .filter((wrapper) => wrapper.metatype && Reflect.getMetadata(BUSINESS_LOGIC_CONTAINER, wrapper.metatype))

        blocProviders.forEach((b) => {
            const i = b.instance;
            const methods = this.getMethods(i)

            methods.forEach((s) => {

                const method = i[s];
                const validator: string = Reflect.getMetadata(`${BUSINESS_LOGIC_VALIDATOR}/${s}`, BusinessRulesManager)
                const hook: string = Reflect.getMetadata(`${BUSINESS_LOGIC_HOOK}/${s}`, BusinessRulesManager)
                this.logger.log(`Bloc: ${s} `)

                if (hook) {
                    //it is a hook 
                    this.bloc.at(hook, method);
                    this.logger.log(`Hook: ${hook}`)
                }
                else if (validator) {
                    //it is a validator
                    this.bloc.on(validator, method)
                    this.logger.log(`Validator: ${validator}`)
                }

            })
        })


    }

}
