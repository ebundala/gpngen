
import { gql } from "apollo-server-express";
import { readFileSync, writeFileSync } from "fs";
import {
  ASTNode, print,
  ObjectTypeDefinitionNode,
  visit,
  FieldDefinitionNode,
} from "graphql";
import { join } from "path";
enum OperationType {
  query = '@Query()',
  mutation = '@Mutation()',
  subscription = '@Subscription()'
}
type OperationDef = { name: string, type: OperationType }



const resolverTemplate = (operation: OperationDef[], prefix: string) => `
import { Resolver, Query,Mutation,Subscription, Info, Args, Context, Parent } from '@nestjs/graphql';
import { TenantContext } from '@mechsoft/common';
import { PolicyService } from './policy.service';
import { AuthorizerGuard } from '@mechsoft/enforcer';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class Policy${prefix}Resolver {
  constructor(private readonly service: PolicyService) { }
  ${operation.map((v) => resolverMethodTemp(v.name, v.type)).join('\n\n')}
}
`

const resolverMethodTemp = (name: string, type: OperationType) => `
${type}
@UseGuards(AuthorizerGuard)
${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info) {
    return this.service.handle(parent, args, ctx, info);
  }
`


export const createPolicySchema = (outDir: string, schemaPath: string) => {

  const path = join(process.cwd(), outDir)
  const text = readFileSync(schemaPath)
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
      const txt=`type x{
        ${field}${args ? `(${args})` : ''}: ${checkScaler(type) ? newType : type}
    }`;
      const t2 = gql`${txt}`
      const d = t2.definitions[0] as ObjectTypeDefinitionNode
      return d.fields[0] as FieldDefinitionNode;

  }
  const overideInputFieldDefinition = (field, type, newType) => {
      if (checkScaler(type)) {
       const txt=`
       input x{
       ${field}: ${newType}
       }`;
          const t2 = gql`${txt}`
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
