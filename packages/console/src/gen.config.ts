import { SdlGeneratorServiceOptions, writeSchemaToFile } from '@mechsoft/apigen';
import { join } from 'path';
import { Upload, UploadDirective, UploadTypeResolver } from './app-schemas/directives/uploader.directive';

const options: SdlGeneratorServiceOptions = {
  schemaPath: './prisma/schema.prisma',

  customOptions: {
    onDelete: true,
    genTypes: true,

    // excludeFields: ['Id'],
    excludeQueriesAndMutationsByModel: {
      'User': ['createOne', 'deleteMany']
    },
    excludeQueriesAndMutations: [
      'upsertOne', 'aggregate', 'deleteMany', 'updateMany', 'findCount'
    ],
    excludeModels: [
      {
        name: 'CasbinRule',
        queries: true,
        mutations: true,
      },
      {
        name: 'Location',
        queries: true,
        mutations: true,
      },
      {
        name: 'Attachment',
        queries: true,
        mutations: true,
      },
    ],
    output: './src/schemas',
  },

  sdlOptions: {
    typePaths: ['./src/schemas/**/*.graphql','./src/app-schemas/**/*.graphql'],
    definitions: {
      path: 'src/models/graphql.ts',
        outputAs: 'class',
        customScalarTypeMapping: {
            Upload: 'Promise < FileUpload >',
            DateTime: 'string'
        },
      additionalHeader: "import { FileUpload } from '@apollographql/graphql-upload-8-fork';"
    },
    transformSchema: (schema) => {
      writeSchemaToFile(schema, join(process.cwd(), 'src/models'));
      return schema;
    },
    debug: true,
    uploads: true,
    playground: false,
    schemaDirectives: {
      file: UploadDirective,
    },
    resolvers: {
      Upload: UploadTypeResolver
    },
    sortSchema: true,
  }
};
export default options;
