import { TenantContext } from '@mechsoft/common';
import {
  Args,
  Context, Info, Mutation,
  Resolver
} from '@nestjs/graphql';
import {
  AuthInput,
  AuthResult,
  SignOutResult, User
} from 'src/models/graphql';
import { AuthService } from './auth-service';

@Resolver((of) => User)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
   // private readonly logger: AppLogger
  ) { }
  @Mutation((returns) => AuthResult)
  async signup(
    @Args('credentials', { type: () => AuthInput }) credentials: AuthInput,
    @Info() info,
    @Context() ctx: TenantContext
  ): Promise<AuthResult> {
    const {select} = ctx.prisma.getSelection(info).valueOf('user', 'User', { select: {  } });
    const result = await this.authService.signup(credentials,ctx.prisma,select);
    //this.setAuth(result.user, ctx);
    return result;
  }

  @Mutation((returns) => AuthResult)
  async signin(
    @Args('credentials', { type: () => AuthInput }) credentials: AuthInput,
    @Info() info,
    @Context() ctx: TenantContext
  ): Promise<AuthResult> {
    const {select} = ctx.prisma.getSelection(info).valueOf('user', 'User', { select: {  } });
    const result = await this.authService.signInWithEmail(credentials,ctx.prisma,select);
   // this.setAuth(result.user, ctx);
    return result;
  }
  private setAuth(user, ctx) {
    ctx.auth = { uid: user.id, };
  }
  @Mutation((retuns) => SignOutResult)
  async signout(@Context() ctx:TenantContext, @Info() info,): Promise<SignOutResult> {
    return this.authService.signOut(ctx.token)
  }
  @Mutation((returns) => AuthResult)
  async recoverAccount(@Args('email', { type: () => String }) email,@Context() ctx:TenantContext) {
    return this.authService.recoverAccount(email,ctx.prisma);
  }
  
}

