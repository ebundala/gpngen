import { Injectable, NestMiddleware } from '@nestjs/common';
import { AppLogger } from './modules/app-logger/app-logger.module';
import { CasbinService } from './modules/casbin-enforcer/casbin.service';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly logger: AppLogger,
    // private readonly app:FirebaseService,
    private readonly enforcer: CasbinService
  ) {
    this.logger.setContext(AuthMiddleware.name);
  }
  async use(req: any, res: any, next: () => void) {
    // debugger
    const { headers } = req;
    req.enforcer = this.enforcer;

    if (headers && headers.authorization) {
      const [realm, token] = headers.authorization.split(' ');
      req.auth = token;

      //  await this.app.admin.auth().verifySessionCookie(token,false)//TODO set true to verify revoked tokens
      //   .then((claims)=>{
      //     req.auth = claims;
      //     req.token = token
      //     this.logger.log(claims.uid,'AUTH')
      //   })
      //   .catch((e)=>{
      //     req.auth=null;
      //   }).finally(()=>{
      //     next();
      //   })
      next();
    } else {
      next();
    }

  }
}
