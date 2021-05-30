import { Inject, Injectable, Scope } from "@nestjs/common";
import { CONTEXT } from '@nestjs/graphql';
@Injectable({ scope: Scope.REQUEST })
export class GqlContextInjector{
    
    constructor(@Inject(CONTEXT) private ctx){}
    get context(){
        return this.ctx;
    }
}