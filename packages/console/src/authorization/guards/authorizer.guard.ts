import { TenantContext } from '@mechsoft/common';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { BusinessRulesManager } from '../../business-rules/business-rules-manager.service';
import * as setValue from 'set-value';
@Injectable()
export class AuthorizerGuard implements CanActivate {
  constructor(private readonly bloc: BusinessRulesManager) { }
  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   // debugger
    const gqlHost = GqlExecutionContext.create(ctx);
    const root = gqlHost.getRoot()
    const args = gqlHost.getArgs()
    const context: TenantContext = gqlHost.getContext()
    const info = gqlHost.getInfo();
    const select = context?.prisma.getSelection(info).value
    const role = context?.auth.role ?? 'ANONYMOUS';
    const rules = this.getRulesFromInput(role, { input: args, select }, info?.fieldName, 'allow');
    const rulesAst = this.getRulesAst(rules);
    const enforcer = context.enforcer;
    context.rules = rules;
    context.select = select;
    return this.authorize(enforcer, rules)
      .then(async (allow) => {
        const req = {
          context,
          args,
          rules,
          select,
          allow
        };
        if (allow) {
         // debugger
          const req2 = await this.bloc.handleHookRequest(req);
          await this.bloc.handleBusinessRequest(req2);
        }
        return allow
      });
  }
  async authorize(enforcer, rules: string[][]): Promise<boolean> {
    const enforce = (...args): Promise<boolean> => {
      return enforcer.enforce(...args)
    }
    const result = await Promise.all(rules.map((v) => enforce(...v)))
      .catch((e) => [false]);
    return result.reduce((a, b) => a && b);

  }

  getRulesFromInput(role: string, data, path: string, action: string) {
    const r: string[][] = [];
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        const v = data[i];
        if (typeof v === 'object') {
          r.push(...this.getRulesFromInput(role, v, `${path}`, action))
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
            r.push(...this.getRulesFromInput(role, v1, `${path}`, action))
          }
        } else if (t !== 'object') {
          r.push([role, `${path}.${k1}`, action])
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
