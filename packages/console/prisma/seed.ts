import { getRoleGrouping, getRolePolicies } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { join } from 'path';
import { Role, State, User, UserCreateInput, } from '../src/models/graphql';
import { ANONYMOUS, CONSUMER, MANAGER, PROVIDER, SUPERUSER } from '../src/authorization/roles/roles';
import { createPolicySchema } from "@mechsoft/enforcer";

// const users: UserCreateInput[] = [
//     //consumers
//     {
//         displayName: "USER CONSUMER",
//         role: Role.CONSUMER,
//         email: "consumer1@itahuduma.com",
//         avator: {
//             create: {
//                 path: "avator.link",
//                 mimetype: "image/png"
//             }
//         }
//     },
//     {
//         displayName: "USER2 CONSUMER",
//         role: Role.CONSUMER,
//         email: "consumer2@itahuduma.com",
//         avator: {
//             create: {
//                 path: "avator.link",
//                 mimetype: "image/png"
//             }
//         }
//     },
//     //providers and managers
//     {
//         displayName: "USER MANAGER",
//         role: Role.PROVIDER,
//         email: "manager@itahuduma.com",
//         avator: {
//             create: {
//                 path: "avator.link",
//                 mimetype: "image/png"
//             }
//         },
//         organizations: {
//             create: [
//                 {
//                     name: "Great organization",
//                     description: "great organization",
//                     logo: {
//                         create: {
//                             path: "logo.link"
//                         }
//                     },
//                     location: {
//                         create: {
//                             name: "Kibaha kitende"
//                         }
//                     },
//                     offers: {
//                         create: [
//                             {
//                                 name: "IT consultancy",
//                                 state: State.APPROVED
//                             }
//                         ]
//                     },
//                     services: {
//                         create: [
//                             {
//                                 name: "web design",
//                                 price: 1000.0,
//                                 description: "perfect designs for you",
//                                 category: {
//                                     create: {
//                                         name: "Web design and IT"
//                                     }
//                                 },
//                                 image: {
//                                     create: {
//                                         path: "image.link"
//                                     }
//                                 }
//                             },
//                             {
//                                 name: "web design 1",
//                                 price: 1000.0,
//                                 description: "perfect designs for you",
//                                 category: {
//                                     create: {
//                                         name: "Web design and IT 1"
//                                     }
//                                 },
//                                 image: {
//                                     create: {
//                                         path: "image.link"
//                                     }
//                                 }
//                             },
//                             {
//                                 name: "web design 2",
//                                 price: 1000.0,
//                                 description: "perfect designs for you",
//                                 category: {
//                                     create: {
//                                         name: "Web design and IT 2"
//                                     }
//                                 },
//                                 image: {
//                                     create: {
//                                         path: "image.link"
//                                     }
//                                 }
//                             }
//                         ]
//                     },
//                     staffs: {
//                         create: [
//                             {
//                                 displayName: "STAFF PROVIDER",
//                                 role: Role.PROVIDER,
//                                 email: "staff1@itahuduma.com",
//                                 avator: {
//                                     create: {
//                                         path: "avator.link",
//                                         mimetype: "image/png"
//                                     }
//                                 }
//                             },
//                             {
//                                 displayName: "STAFF2 PROVIDER",
//                                 role: Role.PROVIDER,
//                                 email: "staff2@itahuduma.com",
//                                 avator: {
//                                     create: {
//                                         path: "avator.link",
//                                         mimetype: "image/png"
//                                     }
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             ]


//         }

//     },
//     {
//         displayName: "USER SUPERUSER",
//         role: Role.SUPERUSER,
//         email: "superuser@itahuduma.com",
//         avator: {
//             create: {
//                 path: "avator.link",
//                 mimetype: "image/png"
//             }
//         }
//     }
// ]

const getDefaultPolicies = async () => {
   const su = new SUPERUSER();
   const mn= new MANAGER();
   const pv = new PROVIDER();
   const cs = new CONSUMER();
   const an = new ANONYMOUS();

    //debugger;
    const superUser = getRolePolicies(su)
    const manager = getRolePolicies(mn)
    const provider = getRolePolicies(pv)
    const consumer = getRolePolicies(cs)
    const anonymous = getRolePolicies(an)
    //Roles grouping and inheritance
    const superUserG = getRoleGrouping(su)
    const managerG = getRoleGrouping(mn)
    const providerG = getRoleGrouping(pv)
    const consumerG = getRoleGrouping(cs)
    const anonymousG = getRoleGrouping(an)

    
    superUserG.push(...managerG, ...providerG, ...consumerG, ...anonymousG);
    superUser.push(...manager,...provider,...consumer,...anonymous);
    return { roleGroups: superUserG, policies: superUser };
}

const createRoles = async () => {
    const options = {
        path: join(process.cwd(), 'packages/console/src/authorization/rbac_model.conf'),
        adapter: await PrismaAdapter.newAdapter({
            log: ['error', 'info', 'query', 'warn'],
            datasources: {
                db: {
                    url: "postgresql://rootDev:root@localhost:5432/development?schema=public&pgbouncer=true&connection_limit=1"
                }
            }
        })

    }
    const casbin = new CasbinService(options);
    await casbin.init();
    const { policies, roleGroups } = await getDefaultPolicies();
    const cl = (casbin.getAdapter() as PrismaAdapter);

    await cl.prisma.casbinRule.deleteMany();
    await cl.prisma.casbinRule.createMany({
        skipDuplicates:true,
        data:roleGroups.map(([v0,v1,v2,v3,v4,v5],i)=>{
            return {
                ptype:'g',
                v0,v1,v2,v3,v4,v5
            }
        }).concat(policies.map(([v0,v1,v2,v3,v4,v5],i)=>{
            return {
                ptype:'p',
                v0,v1,v2,v3,v4,v5
            }
        }))
    });



//     await cl.prisma.user.deleteMany()
//     await cl.prisma.$transaction(
//         users.map((v) => cl.prisma.user.create({ data: v }))
//     )
//   

   // await casbin.addGroupingPolicies(roleGroups)
   // await casbin.addPolicies(policies);


    return cl.close();
}

createRoles().then(() => console.log('completed')).catch(console.error)

