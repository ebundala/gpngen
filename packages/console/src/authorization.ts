import { AppLogger } from "@mechsoft/app-logger";
import { CasbinService } from "@mechsoft/enforcer";
import { PrismaClient } from "@mechsoft/prisma-client";
import { GraphQLError } from 'graphql';
export interface AuthorizerOptions {
  logger: AppLogger;
  auth: any;
  enforcer: CasbinService;
  tenantId: string;
  token: string;
  prisma: PrismaClient
}
export function authorizationManager(options: AuthorizerOptions) {
  const { logger, enforcer, tenantId, token, prisma, auth } = options;
  logger.setContext(authorizationManager.name)
  const enforce = (...args): Promise<boolean> => {
    return enforcer.enforce(...args);
  }



  prisma.$on('beforeExit', () => {
    logger.log(`Exiting prisma tenant:${tenantId}`);
  });
  prisma.$use(async (params, next) => {
    const { model, action, args, dataPath, runInTransaction } = params;

    debugger;
    logger.log(`Prisma tenant:${token} operation:${action} resource:${model} path:${dataPath?.join(".")}`);
    const { data,where, } = args;

    const r = [];
    let path = "";
    let rw="read";
    switch (action) {
      case 'findUnique':
        path = `findUnique${model}`
        break;
      case 'findMany':
        path = `findMany${model}`
        break;
      case 'findFirst':
        path = `findFirst${model}`
        break;
      case 'create':
        path = `createOne${model}`
        rw='write'
        break;
      case 'update':
        path = `updateOne${model}`
        rw='write'
        break;
      case 'updateMany':
        path = `updateMany${model}`
        rw='write'
        break;
      case 'upsert':
        path = `upsertOne${model}`
        rw='write'
        break;
      case 'delete':
        path = `deleteOne${model}`
        rw='write'
        break;
      case 'deleteMany':
        path = `deleteMany${model}`
        rw='write'
        break;
      case 'executeRaw':
        path = `executeRaw`
        rw='write'
        break;
      case 'queryRaw':
        path = `queryRaw`
        rw='write'
        break;
      case 'aggregate':
        path = `aggregate${model}`
        break;
      default:
        throw new GraphQLError('Unauthorized operation');
    }
    debugger
    if(args)
    r.push(...getRulesFromInput(token, args, `${path}`, rw))
   // if(where)
   // r.push(...getRulesFromInput(token, data, `${path}.where`, rw))
    
    enforcer.enableLog(true);
    await enforcer.loadPolicy();
    r.push([token,
      path,
      rw])
    const res = await Promise
      .all(r.map((v) => reflect(enforce(...v))))
    //logger.debug(res);
    const allow = res.reduce((p, c) => p.v && c.v ? p : { v: false }).v
    logger.log(`Enforcer:${token} operation:${action} resource:${model} path:${dataPath?.join(".")} allow:${allow}`);


    if (!allow) throw new GraphQLError('Unauthorized: insuficient permision');
    else
      return next(params);
  });
}

const reflect = (p) => p.then((v) => ({ v, status: true }),
  (e) => ({ e, status: false }));

const getRulesFromInput = (token:string, data, path:string, action:string) => {
  debugger
  const r: string[][] = [];
  if (data instanceof Array) {
    for (let i = 0; i < data.length; i++) {
      const v = data[i];
      r.push(...getRulesFromInput(token, v, `${path}`, action))
    }
  } else if (typeof data === 'object') {
    const v = Object.entries(data)
    for (let i = 0; i < v.length; i++) {
      const [k1, v1] = v[i];
      const t = typeof v1;
      if(k1 === 'select' && /select/.test(path)) {
        if (t !== 'object') {
          r.push([token, `${path}`, action])
        }
        else {
          r.push(...getRulesFromInput(token, v1, `${path}`, action))
        }
      }else if (t !== 'object') {
        r.push([token, `${path}.${k1}`, action])
      }
      else {
        r.push(...getRulesFromInput(token, v1, `${path}.${k1}`, action))
      }
    }
  }

  return r;
  // const f=Object.entries(data)
  //     const r:string[][]=[];
  //     for(let i=0;i<f.length;i++){
  //          const [k,v]=f[i];
  //          const t=typeof v;
  //          if(t === 'string' || t === 'number' || t === 'bigint' || t === 'boolean' ){
  //            r.push([token,`${model}.${k}`,action])
  //           logger.log(t)
  //          }
  //          else if(t === 'object') {
  //            const f2=Object.entries(v);
  //            for(let i1=0;i1<f2.length;i1++){
  //                const [k1,v1]=f2[i1];
  //                const t2 = typeof v1
  //                if(t2 === 'object'){
  //                  r.push([token,`${model}.${k}`,k1])

  //                  r.push(...getRulesFromInput(v1,`${model}.${k}.${k1}`,10))
  //                }else{
  //                  r.push([token,`${model}.${k}.${k1}`,'set'])
  //                }


  //            }

  //          }
  //     }
  //     return r
}