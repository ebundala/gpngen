import { AppLogger } from "@mechsoft/app-logger";
import { CasbinService } from "@mechsoft/enforcer";
import { PrismaClient } from "@mechsoft/prisma-client";
import { GraphQLError } from 'graphql';

export interface AuthorizerOptions{
     logger:AppLogger;
     auth:any;
     enforcer: CasbinService;
     tenantId: string;
     token: string;
     prisma: PrismaClient
}
export function authorizationManager (options:AuthorizerOptions){
      const {logger, enforcer, tenantId, token, prisma, auth}=options;
      logger.setContext(authorizationManager.name)
    const enforce=(args): Promise<boolean> =>{
      return enforcer.enforce(args);
    } 
     prisma.$on('beforeExit', () => {
       logger.log(`Exiting prisma tenant:${tenantId}`);
     });
     prisma.$use(async (params, next) => {
      const { model, action, args, dataPath, runInTransaction } = params;
      debugger;
      logger.log(`Prisma tenant:${token} operation:${action} resource:${model} path:${dataPath?.join(".")}`);

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

      const allow =  await enforce([
        model,
        dataPath.join('.'),
        tenantId,
        token,
        action,
      ]);
      logger.log(`Enforcer:${token} operation:${action} resource:${model} path:${dataPath?.join(".")} allow:${allow}`);

     // if (!allow&&) throw new GraphQLError('Unauthorized');
     // else 
     
      return next(params);
    });
  }
 