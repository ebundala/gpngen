import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaClientInjector } from './injector-decorator';
import { PrismaClient } from './prisma-client-service';
@Injectable()

export class PrismaClientMiddleware implements NestMiddleware {
    constructor(
        private readonly client: PrismaClient,
    ) {
    }
    use(req: any, res: any, next: () => void) {
        req.prisma = this.client;
        next()
    }
}
