import { generateResourcesRules } from '../../src/gen.resources.rules';

const schemaPath = 'packages/console/prisma/schema.prisma';
const rulesDir = 'packages/console/src/models'//'packages/apigen/test/prisma'
const depth = 6;

generateResourcesRules(schemaPath, rulesDir, depth).then(()=>{
    console.log("completed")
}).catch((e) => {
    debugger;
    console.error(e)
})