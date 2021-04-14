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
                const validators: string[] = Reflect.getMetadata(`${BUSINESS_LOGIC_VALIDATOR}/${s}`, BusinessRulesManager)
                const hooks: string[] = Reflect.getMetadata(`${BUSINESS_LOGIC_HOOK}/${s}`, BusinessRulesManager)
                debugger

                if (hooks?.length) {
                    //it is a hook 
                    for (let i = 0; i < hooks.length; i++) {
                        this.bloc.at(hooks[i], method);
                        this.logger.log(`BLOC Hook: ${hooks[i]}`)
                    }
                }
                else if (validators?.length) {
                    //it is a validator
                    for (let i = 0; i < validators.length; i++) {

                        this.bloc.on(validators[1], method)
                        this.logger.log(`BLOC Validator: ${validators[i]}`)
                    }
                    }

            })
        })


    }

}
