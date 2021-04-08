import { TenantContext } from "@mechsoft/common";
import { Injectable } from "@nestjs/common";
import { Resolver } from "@nestjs/graphql";
import { AuthorizerGuard } from "../guards/authorizer.guard";
import * as setValue from 'set-value';

import { createRuleAst } from '../../../prisma/rule.ast'
@Injectable()
export class PolicyService {
    async handle(root: any, args: any, ctx: TenantContext, info: any) {
        debugger;
        const { prisma, enforcer } = ctx;
        const { role, parent, view } = args;
        const parents = parent ?? [];
        const { fieldName, operation } = info;
        if (!view) {
            //filter arguments which are used for management
            if (operation.selectionSet) {
                operation.selectionSet.selections = (operation?.selectionSet?.selections as any[]).map(v => {
                    let args = [];
                    (v.arguments as any[]).forEach(a => {
                        const name = a?.name?.value;
                        if (!/role/.test(name) && !/parent/.test(name) && !/view/.test(name)) {
                            args.push(a)
                        }
                    });
                    v.arguments = args;
                    return v;
                });
            }
            const ast = createRuleAst(operation);
            debugger
            const rules = this.getRulesFromInput(role, ast[fieldName], fieldName, 'allow')
            const rulesFlat = rules.map(v => v.slice(1).join('.'));

            //write rules to disk
            const policyAll = (await enforcer.getImplicitPermissionsForUser(role)).map(v => v.slice(1).join('.'));
            const policyOwn = await enforcer.getPermissionsForUser(role);
            const groupingAll = await enforcer.getImplicitRolesForUser(role);
            const groupingOwn = await enforcer.getRolesForUser(role);

            const rulesToAdd = rules.filter((r) => !policyAll.includes(r.slice(1).join('.')))
            const groupingToAdd = parents.filter((r) => !groupingAll.includes(r)).map((p) => [role, p])
            const rulesToRemove = policyOwn.filter((r) => !rulesFlat.includes(r.slice(1).join('.')))
            const groupingToRemove = groupingOwn.filter(r => !parents.includes(r)).map(v => [role, v]);

            const result1 = await enforcer.removePolicies(rulesToRemove);
            const result2 = await enforcer.addPolicies(rulesToAdd);

            const result3 = await enforcer.removeGroupingPolicies(groupingToRemove)
            const result4 = await enforcer.addGroupingPolicies(groupingToAdd);
            debugger
        }
        const policyToReturn = (await enforcer.getImplicitPermissionsForUser(role));

        const value = this.createReturnAst(policyToReturn);
        return value[fieldName]?.select;
    }
    createReturnAst(rules: string[][]) {
        let value = {}
        for (let i = 0; i < rules.length; i++) {
            const [role, rule, v] = rules[i]
            setValue(value, rule, v)
        }
        return value;
    }
    getRulesFromInput(role: string, data, path: string, action: string = 'action') {
        const r: string[][] = [];
        if (data instanceof Array) {
            // debugger
            for (let i = 0; i < data.length; i++) {
                const v = data[i];
                if (typeof v === 'object') {
                    r.push(...this.getRulesFromInput(role, v, `${path}`, action))
                }
                else if (!r.find(([r, p, a]) => r === role && path === p && action === a)) {
                    r.push([role, `${path}`, v]);
                }
            }
        } else if (typeof data === 'object') {
            const v = Object.entries(data ?? {})
            //handle empty objects/promises
            if (v.length === 0) {
                r.push([role, `${path}`, action])
                return r;
            }
            for (let i = 0; i < v.length; i++) {
                const [k1, v1] = v[i];
                const t = typeof v1;
                if (k1 === 'select' && /select/.test(path)) {
                    if (t !== 'object') {
                        r.push([role, `${path}`, v1 as string])
                    }
                    else {
                        r.push(...this.getRulesFromInput(role, v1, `${path}`, action))
                    }
                } else if (t !== 'object') {
                    r.push([role, `${path}.${k1}`, v1 as string])
                }
                else {
                    r.push(...this.getRulesFromInput(role, v1, `${path}.${k1}`, action))
                }
            }
        }

        return r;

    }

    getRulesAst(rules: string[][]) {

        const ast = {};
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i]

            const s = rule.slice(0, rule.length - 1).join('.');
            const v = rule[rule.length - 1];
            setValue(ast, s, v)
        }
        return ast;
    }
}