import { writeFileSync } from "fs";
import { join } from "path";
import { dmmf, DMMF } from "./sdl/schema";

export const generateResourcesRules = async (schemaPath:string, rulesPath:string, depth = 5) => {

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
    debugger;
    const findPaths = (data: DMMF.OutputType) => {
        const N = data.name;
        const a = data.fields;
        const r = new Set<string>();
        for (let i = 0; i < a.length; i++) {
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
        }
        return r;
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

    const resources = findPaths(mutations);
    const resources2 = findPaths(queries);
    const items = [];
    resources.forEach((v) => {
        items.push(`'${v}'`)
    })
    const items2 = []
    resources2.forEach((v) => {
        items2.push(`'${v}'`)
    })
    const rules = `export type MutationRules = ${items.join(" | ")};\n`;
    const rules2 = `export type QueriesRules = ${items2.join(" | ")};\n`;

    writeFileSync(join(process.cwd(), rulesPath, 'rules.ts'), `${rules}${rules2}`)

}
