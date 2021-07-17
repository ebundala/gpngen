import { Injectable } from "@nestjs/common";
import { DiscoveryService } from "@nestjs/core";
import { AppLogger } from "@mechsoft/app-logger";
import { BusinessRulesManager } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_CONTAINER, BUSINESS_LOGIC_FIELD } from "./constants";
import { getMethods } from "./utils";
import * as setValue from 'set-value';


@Injectable()
export class BlocFieldResolverExplorer{
    constructor(private readonly discovery:DiscoveryService,
        private readonly logger: AppLogger,

        ){}

    explore(){
        const wrappers = this.discovery.getProviders();
        debugger;
        const blocProviders = wrappers
            .filter((wrapper) => wrapper.metatype && Reflect.getMetadata(BUSINESS_LOGIC_CONTAINER, wrapper.metatype))
            const resolversMap={};
            blocProviders.forEach((b)=>{
                const instance = b.instance;
                const methods = getMethods(instance);
                methods.forEach((s) => {
                    const method = instance[s];
                    const resolvers: string[][] = Reflect.getMetadata(`${BUSINESS_LOGIC_FIELD}/${s}`, BusinessRulesManager)
                   if(resolvers?.length){
                    for (let i = 0; i < resolvers.length; i++) {
                             const path=resolvers[i];
                        setValue(resolversMap,path,(...args)=>method.apply(instance,args));
                    } 
                   }
                })
       });
       return resolversMap;
    }
}