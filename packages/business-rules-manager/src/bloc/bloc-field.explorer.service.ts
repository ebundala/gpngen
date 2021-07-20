import { Injectable } from "@nestjs/common";
import { DiscoveryService } from "@nestjs/core";
import { AppLogger } from "@mechsoft/app-logger";
import { BusinessRulesManager } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_CONTAINER, BUSINESS_LOGIC_FIELD } from "./constants";
import { getMethods } from "./utils";
import * as setValue from 'set-value';
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { DataloaderInterface } from "./bloc-field.decorator";


@Injectable()
export class BlocFieldResolverExplorer {
    blocProviders: InstanceWrapper<any>[] = [];
    resolversMap = {};
    dataloadersMap = new Map<string, DataloaderInterface>();
    constructor(private readonly discovery: DiscoveryService,
        private readonly logger: AppLogger,

    ) {

        this.blocProviders = this.discovery.getProviders()
            .filter((wrapper) => wrapper.metatype && Reflect.getMetadata(BUSINESS_LOGIC_CONTAINER, wrapper.metatype))

    }
    createDataloaders(root,args,context,info) {
        
        const dataloaders = {};
        this.dataloadersMap.forEach((v, k) => {
            setValue(dataloaders, k, v(root,args,context,info));
        })
        return dataloaders;
    }
    exploreResolvers() {

        this.blocProviders.forEach((b) => {
            const instance = b.instance;
            const methods = getMethods(instance);
            methods.forEach((s) => {
                const method = instance[s];
                const resolvers: Array<[string[], DataloaderInterface]> = Reflect.getMetadata(`${BUSINESS_LOGIC_FIELD}/${s}`, BusinessRulesManager)
                if (resolvers?.length) {
                    for (let i = 0; i < resolvers.length; i++) {
                        
                        const path = resolvers[i][0];

                        const dataloader = resolvers[i][1];
                        if (dataloader && path) {
                            this.dataloadersMap.set(path.join('_'), (...args) => dataloader.apply(instance, args))
                        }
                        if (path) {
                            setValue(this.resolversMap, path, (...args) => method.apply(instance, args));
                        }
                    }
                }
            })
        });
        return this.resolversMap;
    }

}