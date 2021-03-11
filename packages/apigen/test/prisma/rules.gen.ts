import { generateResourcesRules } from '../../src/gen.resources.rules';

const schemaPath = 'packages/apigen/test/prisma/schema.prisma';
const rulesDir = 'packages/apigen/test/prisma'
const depth = 5;

generateResourcesRules(schemaPath, rulesDir, depth).catch((e) => {
    debugger;
    console.error(e)
})