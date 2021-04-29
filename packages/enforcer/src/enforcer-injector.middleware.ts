import { Injectable, NestMiddleware } from '@nestjs/common';
import { CasbinService } from './casbin.service';
@Injectable()
export class EnforcerMiddleware implements NestMiddleware {
    constructor(
        private readonly enforcer: CasbinService,
    ) {
    }
    use(req: any, res: any, next: () => void) {
        req.enforcer = this.enforcer;
        next()
    }
}
