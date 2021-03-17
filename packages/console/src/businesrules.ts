import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { AuthorizerOptions } from "./authorization";
export interface BusinessRequest{
    params:Prisma.MiddlewareParams
    rules: string[][]
    allow: boolean
    authorization: AuthorizerOptions
}
export type cb= (args:BusinessRequest,next?:cb)=>Promise<cb|void>

@Injectable()
export class BusinessRules{
    private rules:Map<string,cb>=new Map();
    on(rule:string,cb:cb){    
        this.rules.set(rule,cb);
    }
    async handleRequest(req:BusinessRequest){
        const {rules}=req;
       return Promise.all(rules.map(
            (r)=>{
                return this.execute(r[1],req)
            }
        ))
    }
   async execute(rule:string,args:any,next?:cb){  
       debugger
       if(this.rules.has(rule)){
          return this.rules.get(rule).apply(this,[args,next]);
       }
    }
}