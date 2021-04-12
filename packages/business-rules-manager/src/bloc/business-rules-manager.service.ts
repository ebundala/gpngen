import { Injectable } from "@nestjs/common";
import { businessRulesEvaluate, EngineConfig } from "./rules.evalutor";
import { TenantContext } from "@mechsoft/common";
import { BaseContext } from 'apollo-server-plugin-base';
type TContext = TenantContext
export interface BusinessRequest<T extends BaseContext = any> {
    args: any
    rules: string[][]
    allow: boolean
    context: T
}

export declare type BusinessRuleHandler = (args: BusinessRequest<TContext>) => Promise<EngineConfig>
export declare type BusinessRuleHookHandler = (args: BusinessRequest<TContext>, next?: BusinessRuleHookHandler) => Promise<BusinessRequest<TContext>>

@Injectable()
export class BusinessRulesManager {
    private rules: Map<string, BusinessRuleHandler> = new Map();
    private handles: Map<string, BusinessRuleHookHandler> = new Map();
    at(rule: string, cb: BusinessRuleHookHandler) {
        this.handles.set(rule, cb);
    }
    on(rule: string, cb: BusinessRuleHandler) {
        this.rules.set(rule, cb);
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

    async handleHookRequest(req: BusinessRequest<TContext>) {
        const hooksMap = this.handles;
        let i = 0;
        const { rules } = req;
        const hooks = rules.filter((v) => hooksMap.has(v[1]))
        const excuteHooks = async (req: BusinessRequest<TContext>,): Promise<BusinessRequest<TContext>> => {
            const a = hooks[i];
            i++;
            if (i < hooks.length) {
                return await hooksMap.get(a[1]).apply(this, [req, excuteHooks]);
            }
            return req;
        }
        return excuteHooks(req)

    }

}