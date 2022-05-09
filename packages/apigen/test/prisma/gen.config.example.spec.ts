import { join } from "path";
import { writeSchemaToFile } from "../../src/sdl/Generators";
import { SdlGeneratorServiceOptions } from "../../src/sdl/config.options";
//import { UploadDirective, UploadTypeResolver } from "./app-schemas/directives/uploader.directive";
import { UploadDirective, UploadTypeResolver } from "../../../console/src/app-schemas/directives/uploader.directive";

const dir = join('test/prisma')
export const options: SdlGeneratorServiceOptions = {
    schemaPath: join(dir, './schema.prisma'),
    customOptions: {
        onDelete: true,
        genTypes: true,
        // authorization: {
        //     depth: 2,
        //     rulesDir: join(dir, './generated/models')

        // },
        // excludeFields: [
        //     "Id"
        // ],
        excludeQueriesAndMutationsByModel: {
            "User": ['createOne', "deleteMany", "deleteOne", 'updateMany', 'upsertOne',],

        },
        excludeModels: [
            {
                name: 'CasbinRule',
                queries: true,
                mutations: true
            }
        ],
        output: join(dir, './generated/schemas'),
    },

    sdlOptions: {
        typePaths: [
            join(dir, './generated/schemas/**/*.graphql'),
            join(dir, './app-schemas/**/*.graphql'),
        ],
        definitions: {

            path: join(dir, './generated/models/graphql.g.ts'),
            outputAs: 'class',
            customScalarTypeMapping: {
                Upload: 'Promise < FileUpload >',
                DateTime: 'string'
            },

            additionalHeader: "import { FileUpload } from '@apollographql/graphql-upload-8-fork';"
        },
        transformSchema: (schema) => {
            writeSchemaToFile(schema, join(dir, 'generated/models'));
            return schema;
        },
        debug: true,
       // uploads: true,
      //  playground: false,
        schemaDirectives: {
            file: UploadDirective,
        },
        resolvers: {
            Upload: UploadTypeResolver
        },
        sortSchema: true,

    }

}


