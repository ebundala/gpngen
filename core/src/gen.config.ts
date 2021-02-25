import { join } from "path";
import { SdlGeneratorServiceOptions } from "./modules/sdl-generator/sdl/config.options";

export const options: Partial<SdlGeneratorServiceOptions> = {
    schemaPath: './prisma/schema.prisma',
    customOptions: {
        onDelete: true,
        genTypes: true,
        excludeFields: [
            "Id", 'tenantId', 'tenant'
        ],
        excludeQueriesAndMutationsByModel: {
            "User": ['createOne', "deleteMany", "deleteOne", 'updateMany', 'upsertOne',],
            "Tenant": ["deleteMany", "deleteOne", 'updateMany', 'upsertOne', 'findMany', 'aggregate',
            ]
        },
        excludeModels: [
            {
                name: 'CasbinRule',
                queries: true,
                mutations: true
            }
        ],
        output: './src/schemas',
    },
    generator: {
        typePaths: ['./src/schemas/**/*.graphql'],
        path: join(process.cwd(), 'src/models/graphql.ts'),
        outputAs: 'class',
    },

}