import { SdlGeneratorServiceOptions } from '@mechsoft/apigen';
import { join } from 'path';

const options: Partial<SdlGeneratorServiceOptions> = {
  schemaPath: './prisma/schema.prisma',
  customOptions: {
    onDelete: true,
    genTypes: true,
    authorization:{
      depth:6,
      rulesDir:'./src/models'
      
  },
    excludeFields: ['Id'],
 //   excludeQueriesAndMutationsByModel: {
    
 //   },
    excludeModels: [
      {
        name: 'CasbinRule',
        queries: true,
        mutations: true,
      },
    ],
    output: './src/schemas',
  },
  generator: {
    typePaths: ['./src/schemas/**/*.graphql','./src/app-schemas/**/*.graphql'],
    path: join(process.cwd(), 'src/models/graphql.ts'),
    outputAs: 'class',
  },
};
export default options;
