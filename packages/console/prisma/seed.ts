import { getRoleGrouping, getRolePolicies } from '@mechsoft/apigen';
import { CasbinService, PrismaAdapter } from '@mechsoft/enforcer';
import { join } from 'path';
import { Admin, Editor, Viewer } from '../src/roles';


const getDefaultPolicies = async () => {

    const admin = getRolePolicies(new Admin())
    const editor = getRolePolicies(new Editor())
    const viewer = getRolePolicies(new Viewer())
    const adminRoleGroups = getRoleGrouping(new Admin());
    const editorRoleGrouping = getRoleGrouping(new Editor())
    const viewerRoleGrouping = getRoleGrouping(new Viewer());
    adminRoleGroups.push(...editorRoleGrouping, ...viewerRoleGrouping);

    admin.push(...editor, ...viewer);
    return { roleGroups: adminRoleGroups, policies: admin };
}

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
    const { policies, roleGroups } = await getDefaultPolicies();
    const cl = (casbin.getAdapter() as PrismaAdapter);
    await cl.prisma.casbinRule.deleteMany();
    roleGroups.push(['user1', 'Admin'],
        ['user2', 'Editor'],
        ['user3', 'Viewer']);

    await casbin.addGroupingPolicies(roleGroups)
    await casbin.addPolicies(policies);


    return (casbin.getAdapter() as PrismaAdapter).close();
}

createRoles().then(()=>console.log('completed')).catch(console.error)


