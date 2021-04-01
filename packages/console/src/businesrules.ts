import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { AuthorizerOptions } from "./authorization";
export interface BusinessRequest {
    params: Prisma.MiddlewareParams
    rules: string[][]
    allow: boolean
    authorization: AuthorizerOptions
}
export type cb = (args: BusinessRequest, next?: cb) => Promise<void>
export type cb2 = (args: BusinessRequest, i: number, next?: cb2) => Promise<BusinessRequest>

@Injectable()
export class BusinessRules {
    private rules: Map<string, cb> = new Map();
    private handles: Map<string, cb2> = new Map();
    at(rule: string, cb: cb2) {
        this.handles.set(rule, cb);
    }
    on(rule: string, cb: cb) {
        this.rules.set(rule, cb);
    }
    async handleBusinessRequest(req: BusinessRequest) {

        const { rules } = req;

        const result = await Promise.all(rules.map(
            (r) => {
                return this.executeBusinesRequest(r[1], req)
            }
        ).filter((v) => v));

        return result;
    }
    async executeBusinesRequest(rule: string, args: any, next?: cb) {
        if (this.rules.has(rule)) {
            return this.rules.get(rule).apply(this, [args, next]);
        }
        return
    }
    async handleHookRequest(req: BusinessRequest) {

        const { rules } = req;

        const result = await Promise.all(rules.map(
            (r) => {
                return this.executeHook(r[1], req)
            }
        ).filter((v) => v));

        return result;
    }

    async createHooks(req: BusinessRequest, i = 0): Promise<BusinessRequest> {
        const { rules } = req;
        const a = rules[i];
        i = i + 1;
        if (i < rules.length) {

            if (this.handles.has(a[1])) {
                return await this.handles.get(a[1]).apply(this, [req, i, this.createHooks]);
            } else {
                return await this.createHooks(req, i)
            }
        }
        return req;
    }

    async executeHook(rule: string, args: any, next?: cb) {
        if (this.handles.has(rule)) {
            return this.handles.get(rule).apply(this, [args, next]);
        }
        return
    }
}