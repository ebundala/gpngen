import { Injectable, Scope } from "@nestjs/common";
import { businessRulesEvaluate, EngineConfig } from "./rules.evalutor";
import { TenantContext } from "@mechsoft/common";
import { BaseContext } from 'apollo-server-plugin-base';
import { Prisma } from "@prisma/client";
type TContext = TenantContext
export interface BusinessRequest<T extends BaseContext = any> {
    args: any
    rules: string[][]
    allow: boolean
    context: T
}
export interface PrismaHookRequest<T extends BaseContext = any>{
    params: Prisma.MiddlewareParams
    result:any,
    rules: string[]
    context:T
}
export declare type BusinessRuleHandler = (args: BusinessRequest<TContext>) => Promise<EngineConfig>
export declare type BusinessRuleHookHandler = (args: BusinessRequest<TContext>, next?: BusinessRuleHookHandler) => Promise<BusinessRequest<TContext>>
export declare type PrismaHookHandler = (args: PrismaHookRequest<TContext>, next?: PrismaHookHandler) => Promise<PrismaHookRequest<TContext>>


@Injectable()
export class BusinessRulesManager {
    
    private rules: Map<string, BusinessRuleHandler> = new Map();
    private handles: Map<string, BusinessRuleHookHandler> = new Map();
    private prismaHooks: Map<string, PrismaHookHandler> = new Map();
    at(rule: string, cb: BusinessRuleHookHandler) {
        this.handles.set(rule, cb);
    }
    on(rule: string, cb: BusinessRuleHandler) {
        this.rules.set(rule, cb);
    }
    when(rule: string, cb: PrismaHookHandler) {
        this.prismaHooks.set(rule,cb);
    }
    async handleBusinessRequest(req: BusinessRequest<TContext>) {
        const { rules } = req;
        const ruleMap = this.rules;
        const result = await Promise.all(rules.filter(((r) => ruleMap.has(r[1]))).map(
            (r) => {
                return this.executeBusinesRequest(r[1], req)
            }
        ));
        return result;
    }
    async executeBusinesRequest(rule: string, args: any,) {
        if (this.rules.has(rule)) {
            const engineConfig = await this.rules.get(rule).apply(this, [args]);
            await businessRulesEvaluate(engineConfig)
            return;
        }

    }

    async handleHookRequest(req: BusinessRequest<TContext>, before: boolean = false) {
        const hooksMap = this.handles;
        let i = 0;
        const { rules } = req;
        const hooks = rules.filter((v) => hooksMap.has(before ? `before:${v[1]}` : v[1]))
        const excuteHooks = async (req1: BusinessRequest<TContext>,): Promise<BusinessRequest<TContext>> => {
            const a = hooks[i];
            i++;
            if (i <= hooks.length) {
                return await hooksMap.get(before ? `before:${a[1]}` : a[1]).apply(this, [req1, excuteHooks]);
            }
            return req1;

        }
        return excuteHooks(req)

    }
    async handlePrismaHookRequest(req: PrismaHookRequest<TContext>, before: boolean = false) {
        const hooksMap = this.prismaHooks;
        let i = 0;
        const { rules } = req;
        const hooks = rules.filter((v) => hooksMap.has(before ? `before:${v}` : v))
        const excuteHooks = async (req1: PrismaHookRequest<TContext>,): Promise<PrismaHookRequest<TContext>> => {
            const a = hooks[i];
            i++;
            if (i <= hooks.length) {
                return await hooksMap.get(before ? `before:${a}` : a).apply(this, [req1, excuteHooks]);
            }
            return req1;

        }
        return excuteHooks(req)

    }

}