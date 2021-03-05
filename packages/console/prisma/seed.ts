import { DMMF, getDMMF } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';



const dmmf = async (schemaPath):Promise<DMMF.Document> => {
    const schema = readFileSync(schemaPath, 'utf-8');
    return await getDMMF({ datamodel: schema });
  }
const schemaPath='./prisma/schema.prisma';


const datamodel = async(path)=>{
    const { datamodel }: { datamodel: DMMF.Datamodel,schema: DMMF.Schema } = await dmmf(path);
    
    return datamodel;
  }

  const modelTypes=async (path) =>{    const { schema }: { schema: DMMF.Schema } = await dmmf(path);
    
    return schema.outputObjectTypes.model;
  }
  const inputTypes=async (path)=>{
    
        const { schema }: { schema: DMMF.Schema } = await dmmf(path);
        
        return schema.inputObjectTypes.prisma;
      }
  type ModelAction='findUnique'|
  'findMany'|
  'findFirst'| 
  'create'|
  'createMany'|  
  'update'|
  'updateMany'|  
  'upsert'|
  'delete'|
  'deleteMany'|
  'queryRaw'|
  'aggregate';
  type inputAction= "set"|
  "connect"|
  "create"|
  "connectOrCreate"|
  "update"|
  "delete"|
  "updateMany"|
  "disconnect"|
  "deleteMany"|
  "upsert";
  type ModelFieldAction="view"
  type InputFieldAction="view"

  const modelActions:ModelAction[]=[
    'findUnique',
    'findMany',
    'findFirst', 
    'create',
    'createMany',  
    'update',
    'updateMany',  
    'upsert',
    'delete',
    'deleteMany',
    'queryRaw',
    'aggregate'
  ]
  const inputFieldActions:InputFieldAction[]=[
      "view"
  ];
  const inputActions:inputAction[]=[
    "set",
    "connect",
    "create",
    "connectOrCreate",
    "update",
    "delete",
    "updateMany",
    "disconnect",
    "deleteMany",
    "upsert"
    
  ];
  interface InputModelAction{
    set:boolean
    connect:boolean
    create:boolean
    connectOrCreate:boolean
    update:boolean
    delete:boolean
    updateMany:boolean
    disconnect:boolean
    deleteMany:boolean
    upsert:boolean
  }
  const fieldActions:ModelFieldAction[]=[
      "view"
  ]
  interface RoleModelActions{
    findUnique?: boolean
    findMany?: boolean
    findFirst?: boolean 
    create?: boolean
    createMany?: boolean  
    update?: boolean
    updateMany?: boolean  
    upsert?: boolean
    delete?: boolean
    deleteMany?: boolean
    queryRaw?: boolean
    aggregate?: boolean
  }
  interface DenyModels{
      [K:string]:boolean
  }
  interface AllowModels{
      [k:string]:RoleModelActions
  }
  interface ModelPolicyAst{
      [k:string]:{
          actions:{
              [k: string]:{
                  [k:string]:boolean
                }
          },
          fields:{
            actions:{
                [k:string]:{
                    [k:string]:boolean
                  }
            }
          }
      }
  }
  
  interface Role{
      name: string,
      allowAll?: RoleModelActions
      denyModel?:DenyModels
      allowModel?:AllowModels
  }
  const roles: Role[]=[
      {
          name:"admin",
          allowModel:{
              CasbinRule:{
                  create:true,
                  findFirst:true,
                  findMany:true,
                  findUnique:true
                  
              }
          },
          allowAll:{
          delete:true,
          deleteMany:true,
          updateMany:true,
          queryRaw:true,
          aggregate:true
      }
    },
    {
    name:'editor',
    denyModel:{      
        CasbinRule:true
    },
    allowAll:{
        create:true,
        update:true,
        upsert:true
    }
   },
    {
    name:'viewer',
    denyModel:{      
        CasbinRule:false,       
    },
    allowAll:{
        findMany:true,
        findFirst:true,
        findUnique:true
    },
   }
   ];
  
const generateModelPolicy=(models:DMMF.OutputType[])=>{
    return `[${models.map((v)=>{
        return `
        {
           "${v.name}":{
               "actions":{
                   ${modelActions.map((a)=>{
                       return `"${a}":{
                           ${roles.map(({name,allowAll,denyModel,allowModel})=>{
                               return`"${name}":${
                                   denyModel&&denyModel[v.name]?false:allowAll[a]?true:
                                   allowModel&&allowModel[v.name]&&allowModel[v.name][a]?true:false
                                }`
                           }).join(',')}
                       }`
                   }).join(',')}
               },
               "fields":{
                   ${v.fields.map((f)=>{
                       return`
                       "${f.name}":{
                           "actions":{
                               ${fieldActions.map((a)=>{
                                   return `"${a}":false`
                               }).join(',')}
                           }
                       }
                       `
                   }).join(',')}

               }
           } 
        }
        `
   }).join(',')}]`
}
const generateInputPolicy=(inputs:DMMF.InputType[])=>{
    return `[${inputs.map((v)=>{
        return `
        {
           "${v.name}":{
               "actions":{
                   ${inputActions.map((a)=>{
                       return `"${a}":false`
                   }).join(',')}
               },
               "fields":{
                   ${v.fields.map((f)=>{
                       return`
                       "${f.name}":{
                           "actions":{
                               ${inputFieldActions.map((a)=>{
                                   return `"${a}":false`
                               }).join(',')}
                           }
                       }
                       `
                   }).join(',')}

               }
           } 
        }
        `
   }).join(',')}]`
}
const createDefaultPolicies = async ()=>{
    const models= await modelTypes(schemaPath);
    const inputs = await inputTypes(schemaPath)

  const p=  generateModelPolicy(models);
  const p2= generateInputPolicy(inputs);
  const pAst:ModelPolicyAst[]=JSON.parse(p);
  const policies=pAst.map((i)=>{
    const obj=  Object.keys(i)[0];
    const {actions,fields}=i[obj];
    const a=Object.entries(actions) 
    const p:string[][]=[]   
    for(let s=0;s<a.length;s++){
        const [kAction,v]=a[s];
        const r=Object.entries(v)
          for(let j=0;j<r.length;j++){

              const [sub,allow]=r[j];
              if(allow)
              p.push([sub,obj,kAction])
          }
        
    }
    return p
  }).reduce((ac,v)=>ac.concat(v))
  writeFileSync(join(process.cwd(),'./prisma/model-policies.json'),JSON.stringify(policies));

  //  writeFileSync(join(process.cwd(),'./prisma/model-policies.json'),p);
  //  writeFileSync(join(process.cwd(),'./prisma/input-policies.json'),p2);
return policies;
}
//createDefaultPolicies()

const createRoles = async () => {
    const options = {
        path: './src/authorization/rbac_model.conf',
        adapter: await PrismaAdapter.newAdapter()

    }
    const casbin = new CasbinService(options)

    const policies= await createDefaultPolicies();
    await (casbin.getAdapter() as PrismaAdapter)
    .prisma.casbinRule.deleteMany()
   /*  await casbin.removePolicies(policies)
    await casbin.removeGroupingPolicies([
        ['user1', 'admin'],
        ['user2', 'editor'],
        ['user3', 'viewer'],

        //inherited role policies
        ['admin', 'editor'],
        ['editor', 'viewer']
    ]) */
    await casbin.addPolicies(policies);
    
  //  debugger
      await casbin.addGroupingPolicies([
         ['user1', 'admin'],
         ['user2', 'editor'],
         ['user3', 'viewer'],
 
         //inherited role policies
         ['admin', 'editor'],
         ['editor', 'viewer']
     ])
 
   /*  await casbin.addPolicies([
         ['admin', 'Tenant', 'delete'],
         ['editor', 'Tenant', 'create'],
         ['editor', 'Tenant', 'update'],
         ['viewer', 'Tenant', 'findFirst'],
         ['viewer', 'Tenant', 'findMany'],
         ['viewer', 'Tenant', 'findUnique'],
     ]); */
    return
}

createRoles().then(console.log).catch(console.error)
