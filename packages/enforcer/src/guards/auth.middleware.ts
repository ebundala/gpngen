import { AppLogger } from '@mechsoft/app-logger';
import { FirebaseService } from '@mechsoft/firebase-admin';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly logger: AppLogger,
    private readonly app: FirebaseService,
  ) {
    this.logger.setContext(AuthMiddleware.name);
  }
  async use(req: any, res: any, next: () => void) {
    const { headers } = req;
    req.logger = this.logger;

    if (headers && headers.authorization) {

      const [realm, token] = headers.authorization.split(' ');
      req.token = token;

      //TODO remove below line after debugging
      // req.auth = { uid: realm, role: token }
      //   next();
      if (token)
        await this.app.admin.auth().verifySessionCookie(token, true)//TODO set true to verify revoked tokens
          .then((claims) => {
            req.auth = claims;

          req.token = token
          this.logger.log(claims.uid, 'AUTH')
        })
         .catch((e) => {
           req.auth = null;
         }).finally(() => {
          next();
        })
        
      next();
    } else {
      next();
    }

  }
}
