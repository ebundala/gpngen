//import { TenantContext } from '@mechsoft/common';
import { AppLogger } from '@mechsoft/app-logger';
import { onDeleteArgs, PrismaDelete, PrismaSelect } from '@paljs/plugins';
import { Prisma, PrismaClient as _PrismaClient, Tenant } from '@prisma/client';
import { Enforcer } from 'casbin';
import { GraphQLError } from 'graphql';
export interface PrismaTenantOptions extends Prisma.PrismaClientOptions{
  enforcer: Enforcer
  tenantId: string
  token: string
  logger: AppLogger
  auth: any
} 
export class PrismaClient extends _PrismaClient {
  private enforcer: Enforcer;
  private tenantId: string;
  private token: string;
  private logger: AppLogger;
  private auth: any;
  constructor(options: PrismaTenantOptions) {
    super(options);
    this.logger=options.logger;
    this.logger.setContext(PrismaClient.name)
    this.auth=options.auth;
    this.enforcer = options.enforcer;
    this.tenantId=options.tenantId;
    this.token=options.token;
    
     this.$on('beforeExit', () => {
       this.logger.log(`Exiting prisma tenant:${this.token}`);
     });
    this.$use(async (params, next) => {
      const { model, action, args, dataPath, runInTransaction } = params;
      debugger;
      this.logger.log(`Prisma tenant:${this.token} operation:${action} resource:${model} path:${dataPath?.join(".")}`);

      switch (action) {
        case 'create':
          break;
        case 'findUnique':
          break;
        case 'findMany':
          break;
        case 'findFirst':
          break;
        case 'create':
          break;
        case 'update':
          break;
        case 'updateMany':
          break;
        case 'upsert':
          break;
        case 'delete':
          break;
        case 'deleteMany':
          break;
        case 'executeRaw':
          break;
        case 'queryRaw':
          break;
        case 'aggregate':
          break;
        default:
          throw new GraphQLError('Unauthorized operation');
      }

      const allow = this.enforce([
        model,
        dataPath.join('.'),
        this.tenantId,
        this.token,
        action,
      ]);
      if (!allow) throw new GraphQLError('Unauthorized');
      else return next(params);
    });
  }
  async enforce(args): Promise<boolean> {
    return this.enforcer.enforce(args);
  }
  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }

  public getSelection(info): PrismaSelect {
    return new PrismaSelect(info);
  }
  public getTenant(tenantId: string): Prisma.Prisma__TenantClient<Tenant> {
    return this.tenant.findUnique({ where: { id: tenantId } });
  }
}

export const PrismaClientService = {
  provide: PrismaClient,
  // useValue: new PrismaClient({ log: ['query'] }),
  useClass: PrismaClient,
};
