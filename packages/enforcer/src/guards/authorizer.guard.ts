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
    ctx: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const gqlHost = GqlExecutionContext.create(ctx);

    let args = gqlHost.getArgs()
    const context: TenantContext = gqlHost.getContext()
    const info = gqlHost.getInfo();
    const role = context?.auth?.role ?? 'ANONYMOUS';
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
          // Before business rules validation hooks (any logic before creating records)
          const req2 = await this.bloc.handleHookRequest(req, true);
          //Business validation rules excution
          await this.bloc.handleBusinessRequest(req2);
          //after Business rules validation hook (handle creation of dependent records)
          const req3 = await this.bloc.handleHookRequest(req2);
          (ctx as any).args[1] = req3.args;
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
