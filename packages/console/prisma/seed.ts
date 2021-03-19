import { getRoleGrouping, getRolePolicies } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { join } from 'path';
import { ANONYMOUS, CONSUMER, MANAGER, PROVIDER, SUPERUSER } from '../src/authorization/roles/roles';

const getDefaultPolicies = async () => {
   const su = new SUPERUSER();
   const mn= new MANAGER();
   const pv = new PROVIDER();
   const cs = new CONSUMER();
   const an = new ANONYMOUS();
  // debugger;
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

    
    superUserG.push(...managerG,...providerG,...consumerG,...anonymousG);

    superUser.push(...manager,...provider,...consumer,...anonymous);
    return { roleGroups: superUserG, policies: superUser };
}

const createRoles = async () => {
    const options = {
        path: join(process.cwd(), 'packages/console/src/authorization/rbac_model.conf'),
        adapter: await PrismaAdapter.newAdapter({
            datasources: {
                db: {
                    url: "postgresql://rootDev:root@localhost:5432/development?schema=public&pgbouncer=true&connection_limit=1"
                }
            }
        })

    }
    const casbin = new CasbinService(options)
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
   // await casbin.addGroupingPolicies(roleGroups)
   // await casbin.addPolicies(policies);


    return cl.close();
}

createRoles().then(()=>console.log('completed')).catch(console.error)


