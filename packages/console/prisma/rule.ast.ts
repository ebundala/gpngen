import { gql } from "apollo-server-express";
import { readFileSync, writeFileSync } from "fs";
import {
    ASTNode, print,
    ObjectTypeDefinitionNode,
    visit,
    FieldDefinitionNode
} from "graphql";
import { join } from "path";


const getRulesAstFromInput = (role: string, data, path: string, action: string) => {
    const r: string[][] = [];
    if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
            const v = data[i];
            if (typeof v === 'object') {
                r.push(...getRulesAstFromInput(role, v, `${path}`, action))
            }
            else if (!r.find(([r, p, a]) => r === role && path === p && action === a)) {
                r.push([role, `${path}`, action]);
            }
        }
    } else if (typeof data === 'object') {

        const v = Object.entries(data)
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
                    r.push([role, `${path}`, action])
                }
                else {
                    r.push(...getRulesAstFromInput(role, v1, `${path}`, action))
                }
            } else if (t !== 'object') {
                r.push([role, `${path}.${k1}`, action])
            }
            else {
                r.push(...getRulesAstFromInput(role, v1, `${path}.${k1}`, action))
            }
        }
    }

    return r;

}

export const createPolicySchema = () => {

    const path = join(process.cwd(), 'packages/console/src/authorization/policy')
    const file = join(path, '../../models', 'schema.graphql')
    const text = readFileSync(file)
    const ast: ASTNode = gql`
    enum PERMISSION{
        allow
        deny
    }
    ${text}`;

    const scalers = [
        'String', 'Int', 'Float', 'Boolean', 'ID'
    ];
    const checkScaler = (s) => {
        for (let i = 0; i < scalers.length; i++) {

            if (s === scalers[i]) {
                return true;
            }
        }
        return false;
    }
    const getFieldType = (node: ASTNode) => {
        const c = print(node);
        const [f, t] = /\)/.test(c) ? c.split(')') : c.split(':')
        const [f2, a] = f.split('(')
        const regex = /[&\/\\#,+()$~%.'":*?<>{}\s!\[\]]/g
        return [
            f2.replace(regex, ''),
            t.replace(regex, ''),
            (a ?? '').replace(')', '')
        ]
    }
    const overideFieldDefinition = (field, type, newType, args) => {
        const t2 = gql`
        type x{
        ${field}${args ? `(${args})` : ''}: ${checkScaler(type) ? newType : type}
        }`
        const d = t2.definitions[0] as ObjectTypeDefinitionNode
        return d.fields[0] as FieldDefinitionNode;

    }
    const overideInputFieldDefinition = (field, type, newType) => {
        if (checkScaler(type)) {

            const t2 = gql`
        input x{
        ${field}: ${newType}
        }`
            const d = t2.definitions[0] as ObjectTypeDefinitionNode
            return d.fields[0];
        }
    }

    visit(ast, {
        ScalarTypeDefinition: {
            leave(node) {
                scalers.push(node.name.value)
            }
        },
        EnumTypeDefinition: {
            leave(node) {
                scalers.push(node.name.value)
            }
        }
    });
    const operations1: OperationDef[] = [];
    const operations2: OperationDef[] = [];
    const operations3: OperationDef[] = [];
    const ast2: ASTNode = visit(ast, {
        ObjectTypeDefinition: {
            leave(node, key, parent, path, ancestors) {

            }
        },
        InputValueDefinition: {
            leave(node) {
                //debugger                
                const [f, t] = getFieldType(node);
                return overideInputFieldDefinition(f, t, 'PERMISSION');
            }
        },

        FieldDefinition: {
            leave(node, key, p, path, ancestors) {
                //debugger
                const parent = ancestors[ancestors.length - 1] as ObjectTypeDefinitionNode
                const name = parent?.name?.value;
                let args = 'action: PERMISSION';
                if (name === 'Query' || name === 'Mutation' || name == 'Subscription') {

                    args = 'role: Role!, parent:[Role!], view: Boolean'
                    let op;
                    switch (name) {
                        case 'Mutation':
                            op = OperationType.mutation;
                            operations1.push({ name: node.name.value, type: op })

                            break;
                        case 'Subscription':
                            op = OperationType.subscription;
                            operations2.push({ name: node.name.value, type: op })

                            break
                        case 'Query':
                            op = OperationType.query;
                            operations3.push({ name: node.name.value, type: op })

                            break
                    }
                }
                const [f, t, a] = getFieldType(node)
                return overideFieldDefinition(f, t, 'PERMISSION', `${args ? args : ''}${a && args ? ',' : ''}${a ?? ''}`);

            }

        }
    })

    const schema = print(ast2)
    const queries = resolverTemplate(operations3, 'Query');
    const mutations = resolverTemplate(operations1, 'Mutation');
    const subscriptions = resolverTemplate(operations2, 'Subscription');

    writeFileSync(join(path, 'policy.graphql'), schema)
    writeFileSync(join(path, 'policy.query.resolvers.ts'), queries)
    writeFileSync(join(path, 'policy.mutations.resolvers.ts'), mutations)

    writeFileSync(join(path, 'policy.subscriptions.resolvers.ts'), subscriptions)

    return ast2
}


export const createRuleAst = (op: ASTNode) => {

    const ast = visit(op, {
        EnumValue: {
            leave(node) {
                // debugger
                return node.value
            }
        },
        BooleanValue: {
            leave(node) {
                debugger
                return node.value
            }
        },
        ObjectField: {
            leave(node) {
                // debugger
                return { ...node, kv: node.value }
            }
        },
        ListValue: {
            leave(node) {
                // debugger
                return node.values
            }
        },
        ObjectValue: {
            leave(node) {
                // debugger
                let kv = {}
                node.fields.forEach((v) => {
                    kv[v.name.value] = (v as any).kv;
                })
                return kv
            }
        },

        Field: {
            leave(node, key, parent, path, ancestors) {
                //  debugger
                const name = node.name.value;
                const v: any = {};
                node.arguments.forEach((a) => {
                    v[a.name.value] = (a as any).value
                })
                const select = Object.keys(node.selectionSet ?? {}).length !== 0 ? node.selectionSet : undefined;
                const { action, ...input } = v
                const noInput = Object.keys(input ?? {}).length === 0;
                let fields = {};
                if (select) {
                    fields['select'] = select
                }
                if (!noInput) {
                    fields['input'] = input;
                }
                if (!select && noInput && action) {
                    fields = action
                }

                return { ...node, "fv": { [name]: fields } }

            }
        },
        SelectionSet: {
            leave(node) {
                //  debugger
                let f = {};
                node.selections.forEach((v) => {
                    if (v.kind === 'Field')
                        f = { ...f, ...(v as any).fv };
                })

                return f;
            }
        },
        OperationDefinition: {
            leave(node) {
                return node.selectionSet
            }
        }
    })

    //debugger
    return ast;
}

//createRuleAst();
//createPolicySchema()

const resolverTemplate = (operation: OperationDef[], prefix: string) => `
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '../guards/authorizer.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class Policy${prefix}Resolver {
  constructor(private readonly service: PolicyService) { }
  ${operation.map((v) => resolverMethodTemp(v.name, v.type)).join('\n\n')}
}
`
enum OperationType {
    query = '@Query()',
    mutation = '@Mutation()',
    subscription = '@Subscription()'
}
type OperationDef = { name: string, type: OperationType }
const resolverMethodTemp = (name: string, type: OperationType) => `
${type}
@UseGuards(AuthorizerGuard)
${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }
`
