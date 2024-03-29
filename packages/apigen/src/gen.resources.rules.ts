import {
    mkdirSync,
    writeFileSync,
    existsSync
} from "fs";
import { join } from "path";
import { mkdrIfNotExist } from "./sdl/Generators";
import { dmmf, DMMF } from "./sdl/schema";

export const generateResourcesRules = async (schemaPath: string, rulesPath: string, depth = 5) => {

    const dm = await dmmf(join(process.cwd(), schemaPath));
    const { datamodel, schema, mappings } = dm
    const { enums, models } = datamodel
    const { modelOperations } = mappings;
    const { inputObjectTypes, outputObjectTypes, enumTypes } = schema;
    const queries = outputObjectTypes.prisma.find((v) => v.name == 'Query')
    const mutations = outputObjectTypes.prisma.find((v) => v.name == 'Mutation')
    const inputs: Map<string, DMMF.InputType> = new Map();
    inputObjectTypes.prisma.forEach((v) => {
        inputs.set(v.name, v);
    });
    const outputs: Map<string, DMMF.OutputType> = new Map();
    outputObjectTypes.model.forEach((v) => {
        outputs.set(v.name, v);
    });
    
    const findPaths = (data: DMMF.OutputType) => {
        const N = data.name;
        const a = data.fields;
        const r2 = new Map<string,Set<string>>();
        for (let i = 0; i < a.length; i++) {
            const r = new Set<string>();
            const v = a[i];
            const path = `${v.name}`
            r.add(path);
            if (v.args.length) {
                for (let i1 = 0; i1 < v.args.length; i1++) {
                    const { name, inputTypes } = v.args[i1];
                    const path2 = `${path}.${name}`
                    r.add(path2);
                    if (inputTypes.length) {
                        findInputResources(inputTypes, path2, r, depth)

                    }

                }
            }
            
            findOutputResources(v.outputType,`${path}.select`,r,depth);
          r2.set(v.name,r);
        }
        return r2;
    }

    const findInputResources = (inputTypes, path, p: Set<string>, depth) => {
          
        for (let i2 = 0; i2 < inputTypes.length; i2++) {
            const { type, namespace, location, isList } = inputTypes[i2];
            let input: DMMF.InputType;
            if (location === 'inputObjectTypes' && namespace === 'prisma') {
                input = inputs.get(type);
                for (let s3 = 0; s3 < input.fields.length; s3++) {
                    const v2 = input.fields[s3]
                    const path2 = `${path}.${v2.name}`
                    p.add(path2)
                    if (path2.split(".").length < depth)
                        if (v2.inputTypes.length) {
                            findInputResources(v2.inputTypes, path2, p, depth)
                        }
                }
            }

        }
        return p;
    }

    const findOutputResources = (outputType, path, p: Set<string>, depth = 5) => {
        const { type, namespace, location } = outputType
        let item: DMMF.OutputType;
        if (location === 'outputObjectTypes' && namespace === 'model') {
            item = outputs.get(type);
            for (let s3 = 0; s3 < item.fields.length; s3++) {
                const v2 = item.fields[s3]
                const path2 = `${path}.${v2.name}`
                p.add(path2)
                if (path2.split(".").length < depth)

                    findOutputResources(v2.outputType, path2, p, depth)
            }
        }
        return p;
    }
    const resources = findPaths(mutations);
    const resources2 = findPaths(queries);
    const mutationsRules:string[]=[];
    resources.forEach((v,k)=>{
        const items = [];
    v.forEach((v) => {
        items.push(`'${v}'`)
    })
    const rules = `export const ${k}Rules =[\n${items.join(',\n')}\n];\n`;
     mutationsRules.push(rules);
    });
    const queriesRules:string[]=[];
    resources2.forEach((v,k)=>{
        const items = [];
    v.forEach((v) => {
        items.push(`'${v}'`)
    })
    const rules = `export const ${k}Rules =[\n${items.join(',\n')}\n];\n`;
    queriesRules.push(rules);
    });
    // const items = [];
    // resources.forEach((v) => {
    //     items.push(`'${v}'`)
    // })
    // const items2 = []
    // resources2.forEach((v) => {
    //     items2.push(`'${v}'`)
    // })
    
    // const rules = `export type MutationRules = ${items.join(" | \n")};\n`;
    // const rules2 = `export type QueriesRules = ${items2.join(" | \n")};\n`;
    // const list1=`export const MutationsRulesList=[\n${items.join(',\n')}\n]`
    // const list2=`export const QueriesRulesList=[\n${items2.join(',\n')}\n]`
    // writeFileSync(join(process.cwd(), rulesPath, 'rules.ts'), `${rules}${rules2}`)
     
    const path = join(process.cwd(), rulesPath);
     
    mkdrIfNotExist(path);

    writeFileSync(join(path, 'mutationRuleslist.ts'), `${mutationsRules.join('\n')}`)

    writeFileSync(join(path, 'queriesRuleslist.ts'), `${queriesRules.join('\n')}`)
}
