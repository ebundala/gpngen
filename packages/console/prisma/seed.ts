import { DMMF, getDMMF } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Admin, Editor, getRoleGrouping, getRolePolicies, Viewer } from './roles';


export const dmmf = async (schemaPath): Promise<DMMF.Document> => {
    const schema = readFileSync(schemaPath, 'utf-8');
    return await getDMMF({ datamodel: schema });
}
const schemaPath = './prisma/schema.prisma';


export const datamodel = async (path) => {
    const { datamodel }: { datamodel: DMMF.Datamodel, schema: DMMF.Schema } = await dmmf(path);

    return datamodel;
}

export const modelTypes = async (path) => {
    const { schema }: { schema: DMMF.Schema } = await dmmf(path);

    return schema.outputObjectTypes.model;
}
export const inputTypes = async (path) => {

    const { schema }: { schema: DMMF.Schema } = await dmmf(path);

    return schema.inputObjectTypes.prisma;
}
type ModelAction = 'findUnique' |
    'findMany' |
    'findFirst' |
    'create' |
    'createMany' |
    'update' |
    'updateMany' |
    'upsert' |
    'delete' |
    'deleteMany' |
    'queryRaw' |
    'aggregate';
//Prisma.ModelName
type inputAction = "set" |
    "connect" |
    "create" |
    "connectOrCreate" |
    "update" |
    "delete" |
    "updateMany" |
    "disconnect" |
    "deleteMany" |
    "upsert";
type ModelFieldAction = "view"
type InputFieldAction = "view"

const modelActions: ModelAction[] = [
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
const inputFieldActions: InputFieldAction[] = [
    "view"
];
const inputActions: inputAction[] = [
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
interface InputModelAction {
    set: boolean
    connect: boolean
    create: boolean
    connectOrCreate: boolean
    update: boolean
    delete: boolean
    updateMany: boolean
    disconnect: boolean
    deleteMany: boolean
    upsert: boolean
}
interface FieldAction {
    set?: boolean,
    connect?: boolean,
    create?: boolean,
    connectOrCreate?: boolean,
    update?: boolean,
    delete?: boolean,
    updateMany?: boolean,
    disconnect?: boolean,
    deleteMany?: boolean,
    upsert?: boolean,
}
interface FieldActionByModel {
    [model: string]: {
        allowAll?: FieldAction,
        [field: string]: FieldAction
    }
}
const fieldActions: ModelFieldAction[] = [
    "view"
]
interface RoleModelActions {
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
interface DenyModels {
    [K: string]: boolean
}
interface AllowModels {
    [k: string]: RoleModelActions
}
interface ModelPolicyAst {
    [k: string]: {
        actions: {
            [action: string]: {
                [role: string]: boolean
            }
        },
        fields: {
            [fieldName: string]: {
                isList: boolean,
                type: string,
                location: string,
                path: string,
                actions: {
                    [action: string]: {
                        [role: string]: boolean
                    }
                }
            }

        }
    }
}

interface Role {
    name: string,
    allowAll?: RoleModelActions
    denyModel?: DenyModels
    allowModel?: AllowModels
    fieldActionByModel?: FieldActionByModel

}
const roles: Role[] = [
    {
        name: "admin",
        allowModel: {
            CasbinRule: {
                create: true,
                findFirst: true,
                findMany: true,
                findUnique: true

            }
        },
        allowAll: {
            delete: true,
            deleteMany: true,
            updateMany: true,
            queryRaw: true,
            aggregate: true
        },

    },
    {
        name: 'editor',
        denyModel: {
            CasbinRule: true
        },
        allowAll: {
            create: true,
            update: true,
            upsert: true
        }
    },
    {
        name: 'viewer',
        denyModel: {
            CasbinRule: false,
        },
        allowAll: {
            findMany: true,
            findFirst: true,
            findUnique: true
        },
        fieldActionByModel: {
            Tenant: {
                allowAll: {
                    set: true,
                    create: true,
                    delete: true,
                    update: true,
                    updateMany: true,
                    deleteMany: false,
                    upsert: true,
                    connect: true,
                    disconnect: true

                },

            },
            User: {
                email: { set: true },
                displayName: { set: true },
                forms: {
                    connect: true
                },
                comments: {
                    connect: true,
                    create: true,
                    connectOrCreate: true
                }

            }
        }
    }
];

const generateModelPolicy = (models: DMMF.OutputType[]) => {
    return `[${models.map((v) => {

        return `
        {
           "${v.name}":{
               "actions":{
                   ${modelActions.map((a) => {
            return `"${a}":{
                           ${roles.map(({ name, allowAll, denyModel, allowModel }) => {
                return `"${name}":${denyModel && denyModel[v.name] ? false : allowAll[a] ? true :
                    allowModel && allowModel[v.name] && allowModel[v.name][a] ? true : false
                    }`
            }).join(',')}
                       }`
        }).join(',')}
               },
               "fields":{
                   ${v.fields.map(({ name, outputType, args, isNullable, deprecation }) => {
            const { location, isList, namespace, type } = outputType
            const fieldName = name;

            return `
                       "${fieldName}":{
                        "isList":${isList},
                        "type":"${type}",
                        "location":"${location}",
                        "path":"${v.name}.${fieldName}",
                           "actions":{
                               ${location !== 'outputObjectTypes' ?
                    `"set":{
                                        ${roles.map(({ name, fieldActionByModel }) => {
                        let allow = false;
                        if (fieldActionByModel && fieldActionByModel[v.name]) {
                            const g = fieldActionByModel[v.name];
                            if (g && g[fieldName] && g[fieldName]['set']) {
                                allow = true;
                            } else if (g && g.allowAll && g.allowAll['set']) {
                                allow = true;
                            }
                        }
                        return `"${name}":${allow}`
                    }).join(',')}
                                    }`:
                    inputActions.map((a) => {

                        return `                                  
                                   "${a}":{
                                       ${roles.map(({ name, fieldActionByModel }) => {
                            let allow = false;
                            if (fieldActionByModel && fieldActionByModel[v.name]) {
                                const g = fieldActionByModel[v.name];
                                // g&&g[fieldName]||(g?.allowAll&&g?.allowAll[a])
                                if (g && g[fieldName] && g[fieldName][a]) {
                                    allow = true;
                                } else if (g && g.allowAll && g.allowAll[a]) {
                                    allow = true;
                                }
                            }
                            return `"${name}":${allow}`
                        }).join(',')}
                                   }`
                    }).join(',')}
                           }
                       }
                       `
        }).filter((r) => r).join(',')}

               }
           } 
        }
        `
    }).join(',')}]`
}
const generateInputPolicy = (inputs: DMMF.InputType[]) => {
    return `[${inputs.map((v) => {
        return `
        {
           "${v.name}":{
               "actions":{
                   ${inputActions.map((a) => {
            return `"${a}":false`
        }).join(',')}
               },
               "fields":{
                   ${v.fields.map((f) => {
            return `
                       "${f.name}":{
                           "actions":{
                               ${inputFieldActions.map((a) => {
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
const createDefaultPolicies = async () => {
    
    const admin=getRolePolicies(new Admin())
    const editor= getRolePolicies(new Editor())
    const viewer = getRolePolicies(new Viewer())
    const adminRoleGroups=getRoleGrouping(new Admin());
    const editorRoleGrouping = getRoleGrouping(new Editor())
    const viewerRoleGrouping = getRoleGrouping(new Viewer());
     adminRoleGroups.push(...editorRoleGrouping,...viewerRoleGrouping);

     admin.push(...editor,...viewer);
     return {roleGroups:adminRoleGroups,policies:admin};
    // const models = await modelTypes(schemaPath);
    // const inputs = await inputTypes(schemaPath)
    // debugger
    // const p = generateModelPolicy(models);
    // // const p2 = generateInputPolicy(inputs);
    // const pAst: ModelPolicyAst[] = JSON.parse(p);
    // const policies = pAst.map((i) => {
    //     const obj = Object.keys(i)[0];
    //     const { actions, fields } = i[obj];
    //     const a = Object.entries(actions)
    //     const p: string[][] = []
    //     for (let s = 0; s < a.length; s++) {
    //         const [kAction, v] = a[s];
    //         const r = Object.entries(v)
    //         for (let j = 0; j < r.length; j++) {

    //             const [sub, allow] = r[j];
    //             if (allow)
    //                 p.push([sub, obj, kAction])
    //         }

    //     }
    //     const values = Object.entries(fields);
    //     for (let s = 0; s < values.length; s++) {
    //         const [k, v] = values[s];
    //         const a = Object.entries(v.actions);
    //         for (let s1 = 0; s1 < a.length; s1++) {
    //             const [k1, v1] = a[s1];
    //             const a2 = Object.entries(v1);
    //             for (let s2 = 0; s2 < a2.length; s2++) {
    //                 const [role, v2] = a2[s2];
    //                 if (v2) {
    //                     p.push([role, v.path, k1])
    //                 }
    //             }
    //         }
    //     }
    //     return p
    // }).reduce((ac, v) => ac.concat(v))
    // writeFileSync(join(process.cwd(), './prisma/model-policies.json'), JSON.stringify(policies));

    // writeFileSync(join(process.cwd(), './prisma/model2-policies.json'), p);
    // // writeFileSync(join(process.cwd(),'./prisma/input-policies.json'),p2);
    // const dm = await dmmf(schemaPath);
    // writeFileSync(join(process.cwd(), './prisma/dmmf.json'), JSON.stringify(dm))
    //return policies;
}
//createDefaultPolicies()

const createRoles = async () => {
    const options = {
        path: join(process.cwd(), 'packages/console/src/authorization/rbac_model.conf'),
        adapter: await PrismaAdapter.newAdapter({
            datasources: {
                db: {
                    url: "postgresql://rootDev:root@localhost:6432/development?schema=public&pgbouncer=true&connection_limit=1"
                }
            }
        })

    }
    const casbin = new CasbinService(options)
    debugger
    const {policies,roleGroups} = await createDefaultPolicies();
    const cl= (casbin.getAdapter() as PrismaAdapter);
        await cl.prisma.casbinRule.deleteMany(
         /*    {
            where: {
                v2: {
                    not: {
                        equals: null
                    }
                }
            }
        } */
        )
    /*  await casbin.removePolicies(policies)
     await casbin.removeGroupingPolicies([
         ['user1', 'admin'],
         ['user2', 'editor'],
         ['user3', 'viewer'],
 
         //inherited role policies
         ['admin', 'editor'],
         ['editor', 'viewer']
     ]) */
    roleGroups.push(['user1', 'Admin'],
         ['user2', 'Editor'],
         ['user3', 'Viewer']);
         
    await casbin.addGroupingPolicies(roleGroups)
    await casbin.addPolicies(policies);

    //  debugger
    // await casbin.addGroupingPolicies([
    //     ['user1', 'admin'],
    //     ['user2', 'editor'],
    //     ['user3', 'viewer'],

    //     //inherited role policies
    //     ['admin', 'editor'],
    //     ['editor', 'viewer']
    // ])

    /*  await casbin.addPolicies([
          ['admin', 'Tenant', 'delete'],
          ['editor', 'Tenant', 'create'],
          ['editor', 'Tenant', 'update'],
          ['viewer', 'Tenant', 'findFirst'],
          ['viewer', 'Tenant', 'findMany'],
          ['viewer', 'Tenant', 'findUnique'],
      ]); */
    return (casbin.getAdapter() as PrismaAdapter).close();
}

createRoles().then(console.log).catch(console.error)

const getResourcesPaths = async (depth=5) => {

    const dm = await dmmf(join(process.cwd(), 'packages/console/prisma/schema.prisma'));
    const { datamodel, schema, mappings } = dm
    const { enums, models } = datamodel
    const { modelOperations } = mappings;
    const { inputObjectTypes, outputObjectTypes, enumTypes } = schema;
    const queries = outputObjectTypes.prisma.find((v) => v.name == 'Query')
    const mutations = outputObjectTypes.prisma.find((v) => v.name == 'Mutation')
    const inputs: Map<string,DMMF.InputType>=new Map();
    inputObjectTypes.prisma.forEach((v)=>{
         inputs.set(v.name,v);
     });
    debugger;
    const findPaths = (data: DMMF.OutputType) => {
        const N = data.name;
        const a = data.fields;
        const r = new Set<string>();
        for (let i = 0; i < a.length; i++) {
            const v = a[i];
            const path = `${v.name}` //${v.outputType.type}
            r.add(path);
            if (v.args.length) {
                for (let i1 = 0; i1 < v.args.length; i1++) {
                    const { name, inputTypes } = v.args[i1];
                    const path2 = `${path}.${name}`
                    r.add(path2);
                    if (inputTypes.length) {
                        //todo find input fields resources
                        findInputResources(inputTypes, path2,r,depth)

                    }

                }
            }
        }
        return r;
    }

    const findInputResources = (inputTypes, path,p:Set<string>,depth) => {
       
        for (let i2 = 0; i2 < inputTypes.length; i2++) {
            const { type, namespace, location, isList } = inputTypes[i2];
            let input: DMMF.InputType;
            if (location === 'inputObjectTypes' && namespace === 'prisma') {
                input=  inputs.get(type);
                for (let s3 = 0; s3 < input.fields.length; s3++) {
                    const v2 = input.fields[s3]
                    const path2=`${path}.${v2.name}`
                    p.add(path2)
                    if(path2.split(".").length<depth)
                    if (v2.inputTypes.length) {
                            findInputResources(v2.inputTypes,path2,p,depth)
                       
                        
                    }
                }
            }
            
        }
        return p;
    }
    
    const resources = findPaths(mutations);
    const resources2 = findPaths(queries);
     const items=[];
    resources.forEach((v)=>{
        items.push(`'${v}'`)
    })
    const items2=[]
    resources2.forEach((v)=>{
        items2.push(`'${v}'`)
    })
  const rules=  `export type MutationRules = ${items.join(" | ")};\n`;
  const rules2=  `export type QueriesRules = ${items2.join(" | ")};\n`;

  writeFileSync(join(process.cwd(),'packages/console/prisma/rules.ts'),`${rules}${rules2}`)
        
}

//getResourcesPaths();