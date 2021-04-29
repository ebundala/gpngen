import { gql } from "apollo-server-express";
import { readFileSync, writeFileSync } from "fs";
import {
    ASTNode, print,
    ObjectTypeDefinitionNode,
    visit,
    FieldDefinitionNode,
    GraphQLResolveInfo,
    DocumentNode,
    FragmentDefinitionNode,
    OperationDefinitionNode,

} from "graphql";
import { join } from "path";
import * as setValue from 'set-value';



export const createPolicySchema = (dir: string, schemaRelativePath: string) => {

    const path = join(process.cwd(), dir)
    const file = join(path, schemaRelativePath)
    const text = readFileSync(file)
    const ast: ASTNode = gql`
    enum PERMISSION{
        allow
        deny
    }
    enum OPERATION{
        create
        update
        delete
        view
    }
    input PolicyOperation{
           role: Role!
           operation: OPERATION!
           parent: [Role!]
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
        InputValueDefinition: {
            leave(node) {
                const [f, t] = getFieldType(node);
                return overideInputFieldDefinition(f, t, 'PERMISSION');
            }
        },

        FieldDefinition: {
            leave(node, key, p, path, ancestors) {
                const parent = ancestors[ancestors.length - 1] as ObjectTypeDefinitionNode
                const name = parent?.name?.value;
                const [f, t, a] = getFieldType(node)
                let args;
                if (checkScaler(t)) {
                    args = 'action: PERMISSION';
                }
                if (name === 'Query' || name === 'Mutation' || name == 'Subscription') {

                    args = 'role: Role!, parent:[Role!], action: OPERATION!'
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


export const createRuleAst = (op: ASTNode, fieldValue?: any, fragments?: any, variableValues?: any) => {
    // debugger
    const ast = visit(op, {
        Variable: {
            leave(node) {
                debugger
                if (variableValues) {
                    if (variableValues[node.name.value]) {
                        return variableValues[node.name.value] ?? fieldValue;
                    }
                    return null;
                }

                return node.name.value ?? fieldValue
            }
        },
        NullValue: {
            leave(node) {
                return fieldValue ?? undefined
            }
        },
        EnumValue: {
            leave(node) {
                return node.value ?? fieldValue ?? undefined
            }
        },
        BooleanValue: {
            leave(node) {
                return fieldValue ?? node.value ?? undefined
            }
        },

        StringValue: {
            leave(node) {
                return node.value ?? fieldValue ?? undefined
            }
        },
        IntValue: {
            leave(node) {
                return node.value ?? fieldValue ?? undefined
            }
        },
        FloatValue: {
            leave(node) {
                return node.value ?? fieldValue ?? undefined
            }
        },
        ObjectField: {
            leave(node) {
                return { ...node, kv: node.value ?? fieldValue ?? undefined }
            }
        },
        ListValue: {
            leave(node) {
                return node.values ?? fieldValue ?? undefined
            }
        },
        ObjectValue: {
            leave(node) {
                let kv = {};

                node.fields.forEach((v) => {
                    const value = (v as any).kv;
                    kv[v.name.value] = value;
                })
                if (Object.entries(kv).length === 0) return fieldValue ?? undefined
                return kv
            }
        },

        Field: {
            leave(node) {
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
                    fields = { select }
                }
                if (!noInput) {
                    //fields['input'] = input;
                    fields = { ...fields, ...input }

                }
                if (!select && noInput && action) {
                    fields = action
                }
                else if (Object.entries(fields).length === 0) {
                    fields = fieldValue ?? undefined;
                }
                return { ...node, "fv": { [name]: fields } }

            }
        },

        FragmentDefinition: {
            leave(node) {
                //debugger
                return node.selectionSet
            }
        },
        InlineFragment: {
            leave(node) {
                // debugger
                return { ...node, fv: node.selectionSet }

            }
        },
        FragmentSpread: {
            leave(node) {
                // debugger
                let fragDefAst
                if (fragments) {
                    fragDefAst = createRuleAst(fragments[node.name.value], fieldValue, fragments)

                }
                return { ...node, fv: fragDefAst }
            }
        },
        SelectionSet: {
            leave(node) {
                let f = {};
                //  debugger
                node.selections.forEach((v) => {
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
    // debugger

    return ast;
}
export const getRulesFromFile = (path: string, role: string) => {
    const text = readFileSync(path);
    const ast: DocumentNode = gql`${text}`;

    const operations: OperationDefinitionNode[] = []
    const fragments: { [key: string]: FragmentDefinitionNode } = {};
    ast.definitions.forEach((v) => {
        if (v.kind === 'OperationDefinition') {
            operations.push(v)
        }
        else if (v.kind === 'FragmentDefinition') {
            fragments[v.name.value] = v;
        }
    })
    const policies = operations.map((operation) => {
        filterAdminArgs(operation)
        const fieldName = (operation?.selectionSet?.selections[0] as any)?.name?.value
        const accessAst = getAcessAst({ operation, fragments, fieldName, variableValues: {} });
        const rules = getRulesFromAccessAst(role, accessAst, fieldName, 'deny', true)
        return rules;
    }).reduce((p, c, i, v) => {
        p.push(...c)
        return p
    });
    return policies;
}
export const filterAdminArgs = (operation: OperationDefinitionNode): OperationDefinitionNode => {
    if (operation.selectionSet) {
        operation.selectionSet.selections = (operation?.selectionSet?.selections as any[]).map(v => {
            let args = [];
            (v.arguments as any[]).forEach(a => {
                const name = a?.name?.value;
                if (!/role/.test(name) && !/parent/.test(name) && !/action/.test(name)) {
                    args.push(a)
                }
            });
            v.arguments = args;
            return v;
        });
    }
    return operation
}
export const getRulesFromAccessAst = (role: string,
    data, path: string, action: string, useValue = false) => {
    const r: string[][] = [];
    const getAction = (v) => {
        return useValue ? v.toString() : action
    }
    //add root rule if not added
    if (!/\./.test(path)) {
        r.push([role, `${path}`, 'allow'])
    }
    if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
            const v = data[i];
            if (typeof v === 'object') {
                r.push(...getRulesFromAccessAst(role, v, `${path}`, action, useValue))
            }
            else if (!r.find(([r, p, a]) => r === role && path === p && action === a)) {
                r.push([role, `${path}`, getAction(v)]);
            }
        }
    } else if (typeof data === 'object') {

        const v = Object.entries(data ?? {})
        //handle empty objects/promises
        if (v.length === 0) {
            r.push([role, `${path}`, getAction(v)])
            return r;
        }
        for (let i = 0; i < v.length; i++) {
            const [k1, v1] = v[i];
            const t = typeof v1;
            if (!v1 || /\_\_typename/.test(k1)) {
                continue
            }
            if (k1 === 'select' && /select/.test(path)) {
                if (t !== 'object') {
                    r.push([role, `${path}`, getAction(v1)])
                }
                else {
                    r.push(...getRulesFromAccessAst(role, v1, `${path}`, action, useValue))
                }
            } else if (t !== 'object' && v1) {
                r.push([role, `${path}.${k1}`, getAction(v1)])
            }
            else {
                r.push(...getRulesFromAccessAst(role, v1, `${path}.${k1}`, action, useValue))
            }
        }
    }

    return r;

}

export const getAcessAst = ({ operation, fragments, variableValues, fieldName }) => {
    const { select, ...input } = createRuleAst(operation, true, fragments, variableValues)[fieldName];
    if (Object.keys(input).length)
    return { select, input }
    else {
        return { select }
    }
}
export const rulesToAst = (rules: string[][]) => {
    let value = {}
    for (let i = 0; i < rules.length; i++) {
        const [role, rule, v] = rules[i]
        setValue(value, rule, v)
    }
    return value;
}

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


