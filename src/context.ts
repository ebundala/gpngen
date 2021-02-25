import { BaseContext } from 'apollo-server-plugin-base';
import { Enforcer } from 'casbin';
import { PrismaClient } from './modules/prisma-client/prisma-client-service';

export interface TenantContext extends BaseContext {
    token: string
    tenantId: string
    enforcer: Enforcer
    auth: any

    prisma: PrismaClient
}
