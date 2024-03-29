import { getRoleGrouping, getRolePolicies } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { join } from 'path';
import { Role, ServiceCategoryCreateInput, State, User, UserCreateInput, } from '../src/models/graphql';
import { ANONYMOUS, CONSUMER, MANAGER, PROVIDER, SUPERUSER } from '../src/authorization/roles/roles';
import {Prisma} from '@prisma/client';

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
const categories: Prisma.ServiceCategoryCreateInput[] = [
    {
        name: 'Massage & SPA',
        image:{
            create:{
                path:"icons/massageicon.png",
                mimetype: "image/png",
                filename: "massageicon.png"   
            }
        }
        
    },
    { name: 'Food', image:{
        create:{
            path:"icons/foodicon.png",
            mimetype: "image/png",
            filename: "foodicon.png"

        }
    }},
    { name: 'Cleaner', image:{
        create:{
            path:"icons/cleanericon.png",
            mimetype: "image/png",
            filename: "cleaner.png"

        }
    } },
    { name: 'Gas filler', image:{
        create:{
            path:"icons/gasicon.png",
            mimetype: "image/png",
            filename: "gasicon.png"

        }
    }}
]

const paymentMethods: Prisma.PaymentMethodCreateInput [] = [
    {
        name: "Vodacom M-Pesa",
        code: "VMCASHIN",
        logo:{
            create:{
                path:"icons/mpesa.png"
            }
        }
    },
    {
        name: "Tigo Pesa",
        code: "TPCASHIN",
        logo:{
            create:{
                path:"icons/tigo.png"
            }
        }
    },
    {
        name: "Airtel money",
        code: "AMCASHIN",
        logo:{
            create:{
                path:"icons/airtel.png"
            }
        }
    },
    {
        name: "T-Pesa",
        code: "TTCASHIN",
        logo:{
            create:{
                path:"icons/ttcl.png"
            }
        }
    },
    {
        name: "Hallo pesa",
        code: "HPCASHIN",
        logo:{
            create:{
                path:"icons/halopesa.png"
            }
        }
    },
    {
        name: "Selcom Pay",
        code: "SPCASHIN",
        logo:{
            create:{
                path:"icons/selcom.png"
            }
        }
    }
];

const getDefaultPolicies = async () => {
   const su = new SUPERUSER();
   const mn= new MANAGER();
   const pv = new PROVIDER();
   const cs = new CONSUMER();
   const an = new ANONYMOUS();

    //;
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
        path: join(process.cwd(), 'src/authorization/rbac_model.conf'),
        adapter: await PrismaAdapter.newAdapter({
            log: ['error', 'info', 'query', 'warn'],
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


    const exists = (await cl.prisma.serviceCategory.findMany({
        where: {
            name: {
                mode: 'insensitive',
                in: categories.map((v) => v.name)
            }
        }, select: { name: true }
    }))?.map((v) => v.name) ?? [];
    const tr = categories.filter((v) => !exists.includes(v.name)
    ).map((v) => cl.prisma.serviceCategory.create({ data: v }));
    if (tr.length)
        await cl.prisma.$transaction(tr);




        const exists1 = (await cl.prisma.paymentMethod.findMany({
            where: {
                name: {
                    mode: 'insensitive',
                    in: paymentMethods.map((v) => v.name)
                }
            }, select: { name: true }
        }))?.map((v) => v.name) ?? [];

        const tr1 = paymentMethods.filter((v) => !exists.includes(v.name)
        ).map((v) => cl.prisma.paymentMethod.create({ data: v }));
        if (tr1.length)
            await cl.prisma.$transaction(tr1);

    return cl.close();
}

export default async function(){
    await createRoles().then(() => console.log('completed')).catch(console.error)

}

