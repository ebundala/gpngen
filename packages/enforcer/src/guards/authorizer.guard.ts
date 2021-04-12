import { TenantContext } from '@mechsoft/common';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { BusinessRulesManager } from '@mechsoft/business-rules-manager';
import { getAcessAst, getRulesFromAccessAst } from './rule.ast';
@Injectable()
export class AuthorizerGuard implements CanActivate {
  constructor(private readonly bloc: BusinessRulesManager) { }
  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   // debugger
    const gqlHost = GqlExecutionContext.create(ctx);
    const args = gqlHost.getArgs()
    const context: TenantContext = gqlHost.getContext()
    const info = gqlHost.getInfo();
    const role = context?.auth.role ?? 'ANONYMOUS';
    const { select, input } = getAcessAst(info);
    const rules = getRulesFromAccessAst(role, { input, select }, info?.fieldName, 'allow');
    debugger
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



}
