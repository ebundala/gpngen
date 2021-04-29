import { AppLogger } from '@mechsoft/app-logger';
import { PrismaClient } from '@mechsoft/prisma-client';
import { BaseContext } from 'apollo-server-plugin-base';
import { Enforcer } from 'casbin';


export interface TenantContext extends BaseContext {
    token: string;
    tenantId: string;
    enforcer: Enforcer;
    auth: any;
    logger: AppLogger;
    prisma: PrismaClient;
    rules?: string[][];
    select?: any;
    timestamp?: number;
}
