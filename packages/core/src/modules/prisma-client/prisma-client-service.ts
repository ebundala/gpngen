import { onDeleteArgs, PrismaDelete, PrismaSelect } from '@paljs/plugins';
import { Prisma, PrismaClient as _PrismaClient, Tenant } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { TenantContext } from 'src/context';

export class PrismaClient extends _PrismaClient {
  private ctx: TenantContext;
  constructor(options: Prisma.PrismaClientOptions, context: TenantContext) {
    super(options);
    this.ctx = context;
    this.$use(async (params, next) => {
      const {
        model,
        action,
        args,
        dataPath,
        runInTransaction } = params;
      const { tenantId, token } = this.ctx
      debugger;

      switch (action) {
        case 'create':
          break;
        case "findUnique":
          break;
        case "findMany":
          break;
        case "findFirst":
          break;
        case "create":
          break;
        case "update":
          break;
        case "updateMany":
          break;
        case "upsert":
          break;
        case "delete":
          break;
        case "deleteMany":
          break;
        case "executeRaw":
          break;
        case "queryRaw":
          break;
        case "aggregate":
          break;
        default:
          throw new GraphQLError('Unauthorized')
      }

      const allow = this.enforce([model, dataPath.join('.'), tenantId, token, action]);
      if (!allow)
        throw new GraphQLError('Unauthorized')
      else
        return next(params)
    });
  }
  async enforce(args): Promise<Boolean> {
    return this.ctx.enforcer.enforce(args)
  }
  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }

  public getSelection(info): PrismaSelect {
    return new PrismaSelect(info);
  }
  public getTenant(tenantId: string): Prisma.Prisma__TenantClient<Tenant> {

    return this.tenant.findUnique({ where: { id: tenantId } })
  }


}

export const PrismaClientService = {
  provide: PrismaClient,
  // useValue: new PrismaClient({ log: ['query'] }),
  useClass: PrismaClient
};
