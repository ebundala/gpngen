// import { generateResourcesRules } from '../../src/gen.resources.rules';

// const schemaPath = 'packages/apigen/test/prisma/schema.prisma';
// const rulesDir = 'packages/apigen/test/prisma'
// const depth = 6;

// generateResourcesRules(schemaPath, rulesDir, depth).then(()=>{
//     console.log("completed")
// }).catch((e) => {
//     debugger;
//     console.error(e)
// })

import { generate } from '../../src/index'
import { options } from './gen.config.example.spec'

generate(options)