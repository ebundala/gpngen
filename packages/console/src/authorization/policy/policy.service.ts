import { TenantContext } from "@mechsoft/common";
import { Injectable } from "@nestjs/common";
import { filterAdminArgs, getAcessAst, getRulesFromAccessAst, rulesToAst } from '@mechsoft/enforcer'

@Injectable()
export class PolicyService {
    async handle(root: any, args: any, ctx: TenantContext, info: any) {
        ;
        const { prisma, enforcer } = ctx;
        const { role, parent, action, ...restArgs } = args;
        const parents = parent ?? [];
        const { fieldName, operation } = info;
        if (action != 'view') {
            //filter arguments which are used for management
            // if (operation.selectionSet) {
            //     operation.selectionSet.selections = (operation?.selectionSet?.selections as any[]).map(v => {
            //         let args = [];
            //         (v.arguments as any[]).forEach(a => {
            //             const name = a?.name?.value;
            //             if (!/role/.test(name) && !/parent/.test(name) && !/action/.test(name)) {
            //                 args.push(a)
            //             }
            //         });
            //         v.arguments = args;
            //         return v;
            //     });
            // }
            filterAdminArgs(operation);
            const { select, input } = getAcessAst({ ...info, operation });

            const rules = getRulesFromAccessAst(role, { select, input }, info.fieldName, 'deny', true)

            //const rulesFlat = rules.map(v => v.slice(1).join('.'));

            //write rules to disk
            const policyAll = (await enforcer.getImplicitPermissionsForUser(role))//.map(v => v.slice(1).join('.'));
            const policyOwn = (await enforcer.getPermissionsForUser(role))//.map(v => v.slice(1).join('.'));
            const groupingAll = await enforcer.getImplicitRolesForUser(role);
            const groupingOwn = await enforcer.getRolesForUser(role);

            //  const rulesToAdd = rules.filter((r) => !policyAll.includes(r.slice(1).join('.')))
            //  const groupingToAdd = parents.filter((r) => !groupingAll.includes(r)).map((p) => [role, p])
            //  const rulesToRemove = policyOwn.filter((r) => !rulesFlat.includes(r.slice(1).join('.')))
            //  const groupingToRemove = groupingOwn.filter(r => !parents.includes(r)).map(v => [role, v]);

            // const result1 = await enforcer.removePolicies(rulesToRemove);
            // const result2 = await enforcer.addPolicies(rulesToAdd);

            //  const result3 = await enforcer.removeGroupingPolicies(groupingToRemove)
            //const result4 = await enforcer.addGroupingPolicies(groupingToAdd);
            
            switch (action) {
                case 'create':
                    await this.createPolicies(enforcer, role, rules, parents, policyOwn, policyAll, groupingAll)
                    break;
                case 'update':
                    await this.updatePolicies(enforcer, role, rules, parents, policyOwn, policyAll, groupingOwn, groupingAll)
                    break;
                case 'delete':
                    await this.deletePolicies(enforcer, role, rules, parents, policyOwn, policyAll, groupingOwn, groupingAll)

                    break


            }
            
        }
        const policyToReturn = (await enforcer.getImplicitPermissionsForUser(role));

        const value = rulesToAst(policyToReturn);
        return value[fieldName]?.select;
    }

    async createPolicies(
        enforcer,
        role: string
        , policies: string[][],
        roles: string[],
        allPolicies: string[][],
        ownPolices: string[][],
        inheritedRoles: string[]) {
        //create only new policies and roles ignore existing

        const policiesToCreate = policies.filter(([r, v, a]) => ownPolices.filter(([r1, v1, a1]) => {
            if (v === v1) {
                return r === r1 ? true : a === a1 ? true : false
            }
        }).length === 0);
        const rolesToAdd = roles.filter(g => !inheritedRoles.includes(g)).map(g => [role, g])
        const result = await enforcer.addPolicies(policiesToCreate);
        const result1 = await enforcer.addGroupingPolicies(rolesToAdd);
        return result && result1
    }
    async updatePolicies(enforcer,
        role: string
        , policies: string[][],
        roles: string[],
        ownPolices: string[][],
        allPolicies: string[][],
        ownRoles: string[],
        inheritedRoles: string[]) {
        //update only changed policy and ignore existing
        let policyToDelete: string[][] = [];
        const policiesToCreate = policies.filter(([r, v, a]) => ownPolices.filter(([r1, v1, a1]) => {
            if (v === v1) {
                if (a !== a1) {
                    policyToDelete.push([r, v1, a1])
                    return true
                }
            }
        }).length /* || ownPolices.filter(([_, v2, a2]) => v === v2).length === 0 */);

        const rolesToAdd = roles.filter(g => !inheritedRoles.includes(g)).map(g => [role, g])
        const rolesToRemove = ownRoles.filter(g => !roles.includes(g)).map(v => [role, v])

        const result = await enforcer.removePolicies(policyToDelete);
        const result1 = await enforcer.addPolicies(policiesToCreate);
        const result3 = await enforcer.removeGroupingPolicies(rolesToRemove)
        const result4 = await enforcer.addGroupingPolicies(rolesToAdd);

        return result && result3 && result4;
    }
    async deletePolicies(enforcer,
        role: string
        , policies: string[][],
        roles: string[],
        ownPolicesFlat: string[][],
        allPoliciesFlat: string[][],
        ownRoles: string[],
        inheritedRoles: string[]) {
        //delete only own rules
        const result3 = await enforcer.removeGroupingPolicies(roles.map(v => [role, v]))
        const result1 = await enforcer.removePolicies(policies);

        return result1 && result3
    }

}