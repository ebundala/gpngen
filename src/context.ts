import { Enforcer } from 'casbin';
import { PrismaClient } from './modules/prisma-client/prisma-client-service';

export interface TenantContext {
    token: string
    tenantId: string
    enforcer: Enforcer
    auth: any

    prisma: PrismaClient
}
