import { Module } from "@nestjs/common";
import { GqlContextInjector } from "./context-injector";



@Module({
    providers:[GqlContextInjector],
    exports:[GqlContextInjector]
})
export class GqlContextInjectorModule{
    constructor(private readonly injector: GqlContextInjector){}
    get instance(){
        return this.injector;
    }
}