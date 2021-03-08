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
    const enforce=(...args): Promise<boolean> =>{
      return enforcer.enforce(...args);
    } 

    const getRulesFromInput = (data,model,depth=0,maxDepth=10)=>{
      const f=Object.entries(data)
          const r:string[][]=[];
          for(let i=0;i<f.length;i++){
               const [k,v]=f[i];
               const t=typeof v;
               if(t === 'string' || t === 'number' || t === 'bigint' || t === 'boolean' ){
                 r.push([token,`${model}.${k}`,'set'])
                logger.log(t)
               }
               else if(t === 'object') {
                 const f2=Object.entries(v);
                 for(let i1=0;i1<f2.length;i1++){
                     const [k1,v1]=f2[i1];
                     const t2 = typeof v1
                     if(t2 === 'object'){
                       r.push([token,`${model}.${k}`,k1])
                       if(depth<maxDepth)
                       r.push(...getRulesFromInput(v1,`${model}.${k}.${k1}`,depth++))
                     }else{
                       r.push([token,`${model}.${k}.${k1}`,'set'])
                     }
                     
                     
                 }
                 
               }
          }
          return r
    }
     prisma.$on('beforeExit', () => {
       logger.log(`Exiting prisma tenant:${tenantId}`);
     });
     prisma.$use(async (params, next) => {
      const { model, action, args, dataPath, runInTransaction } = params;
      
      debugger;
      logger.log(`Prisma tenant:${token} operation:${action} resource:${model} path:${dataPath?.join(".")}`);
      const {data}=args;
      const r =[];
      switch (action) {
        
        case 'findUnique':
          break;
        case 'findMany':
          break;
        case 'findFirst':
          break;  
          case 'create':             
        case 'update':         
        case 'updateMany':         
        case 'upsert':
          r.push(...getRulesFromInput(data,model))

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
      
      enforcer.enableLog(true);
      await enforcer.loadPolicy();
     // await enforcer.buildRoleLinks();
     r.push([token,
      model,
      action,])
      const res =  await Promise
      .all(r.map((v)=>reflect(enforce(...v))))
      logger.debug(res);
      const allow=res.reduce((p,c)=>p.v&&c.v?p:{v:false}).v
      logger.log(`Enforcer:${token} operation:${action} resource:${model} path:${dataPath?.join(".")} allow:${allow}`);
       
       
      if (!allow) throw new GraphQLError('Unauthorized: insuficient permision');
      else
      return next(params);
    });
  }

  const reflect = (p) => p.then((v) => ({ v, status: true }),
  (e) => ({ e, status: false }));
 