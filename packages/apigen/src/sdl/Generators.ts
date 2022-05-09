import { Mutation, QueriesAndMutations, Query } from '@paljs/types';
import { DMMF } from '@prisma/client/runtime';
import { getDMMF } from '@prisma/sdk';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { GraphQLSchema, printSchema } from 'graphql';
import { join } from 'path';
import pkgDir from 'pkg-dir';
import { format, Options as PrettierOptions } from 'prettier';
const projectRoot = pkgDir.sync() || process.cwd();

export interface Options {
  models?: string[];
  modelFieldTypeOverrides?: { [key: string]: string };
  output: string;
  javaScript?: boolean;
  excludeFields: string[];
  excludeModels: {
    name: string;
    queries?: boolean;
    mutations?: boolean;
  }[];
  disableQueries?: boolean;
  disableMutations?: boolean;
  excludeFieldsByModel: {
    [modelName: string]: string[];
  };
  onDelete?: boolean;
  genTypes?: boolean;
  authorization?:{
    depth?:number
    rulesDir?:string
  }
  excludeQueriesAndMutationsByModel: {
    [modelName: string]: QueriesAndMutations[];
  };
  excludeQueriesAndMutations: QueriesAndMutations[];
 // doNotUseFieldUpdateOperationsInput?: boolean;
  filterInputs?: (input: DMMF.InputType) => DMMF.SchemaArg[];
  dmmf?: DMMF.Document;

}
export class Generators {
  protected options: Options = {
    output: join(projectRoot, 'src/graphql'),
    excludeFields: [],
    excludeModels: [],
    excludeFieldsByModel: {},
    excludeQueriesAndMutations: [],
    excludeQueriesAndMutationsByModel: {},
  };

  protected isJS?: boolean = false;

  protected queries: Query[] = [
    'findUnique',
    'findFirst',
    'findMany',
    'findCount',
    'aggregate',
  ];
  protected mutations: Mutation[] = [
    'createOne',
    'updateOne',
    'upsertOne',
    'deleteOne',
    'updateMany',
    'deleteMany',
  ];

  constructor(private schemaPath: string, customOptions?: Partial<Options>) {
    this.options = { ...this.options, ...customOptions };
    this.isJS = this.options.javaScript;
  }

  protected async init(): Promise<DMMF.Document> {
    
    if(!this.options.dmmf){
      const schema = readFileSync(this.schemaPath, 'utf-8');
      const dmmf= await getDMMF({ datamodel: schema });
      this.options.dmmf=dmmf;
    }
    return this.options.dmmf;
  }

  protected  datamodel() {
    const { datamodel }: { datamodel: DMMF.Datamodel } = this.options.dmmf;
    return datamodel;
  }
  protected schema(){
    const { schema }: { schema: DMMF.Schema } = this.options.dmmf;
    return schema;
  }
  protected models() {
    const { schema }: { schema: DMMF.Schema } = this.options.dmmf;
    return schema.outputObjectTypes.model.filter(
      (model) =>
        !this.options.models || this.options.models.includes(model.name),
    );
  }

  protected withExtension(filename: string) {
    return filename + (this.isJS ? '.js' : '.ts');
  }

  protected excludeFields(model: string) {
    return this.options.excludeFields.concat(
      this.options.excludeFieldsByModel[model],
    );
  }
  protected fieldTypeOverrides(fieldType: any): string {
    return this.options.modelFieldTypeOverrides?.[fieldType] ?? fieldType;
  }
  /*protected excludeModels(model: string){
    return this.options.excludeModels[model]
  }*/
  protected disableQueries(model: string) {
    return (
      this.options.disableQueries ||
      !!this.options.excludeModels.find(
        (item) => item.name === model && item.queries,
      )
    );
  }

  protected disableMutations(model: string) {
    return (
      this.options.disableMutations ||
      !!this.options.excludeModels.find(
        (item) => item.name === model && item.mutations,
      )
    );
  }

  protected smallModel(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  protected excludedOperations(model: string) {
    return this.options.excludeQueriesAndMutations.concat(
      this.options.excludeQueriesAndMutationsByModel[model] ?? [],
    );
  }

  protected mkdir(path: string) {
    !existsSync(path) && mkdirSync(path, { recursive: true });
  }

  protected output(...paths: string[]): string {
    return join(this.options.output, ...paths);
  }

  protected getIndexContent(files: string[]) {
    const lines: string[] = [];
    if (this.isJS) lines.push('module.exports = {');
    files.forEach((file) => {
      if (this.isJS) {
        lines.push(`  ...require('./${file}'),`);
      } else {
        lines.push(`export * from './${file}'`);
      }
    });
    if (this.isJS) lines.push('}');
    return lines.join('\n');
  }

  protected getImport(content: string, path: string) {
    return this.isJS
      ? `const ${content} = require('${path}')`
      : `import ${content} from '${path}'`;
  }

  protected createFileIfNotfound(
    path: string,
    fileName: string,
    content: string,
  ) {
    !existsSync(path) && this.mkdir(path);
    !existsSync(join(path, fileName)) &&
      writeFileSync(join(path, fileName), content);
  }

  protected get parser() {
    return this.isJS ? 'babel' : 'babel-ts';
  }

  protected formation(
    text: string,
    parser: PrettierOptions['parser'] = this.parser,
  ) {
    return format(text, {
      singleQuote: true,
      semi: false,
      trailingComma: 'all',
      parser,
    });
  }
}
export const mkdrIfNotExist = (path) => {
  return !existsSync(path) && mkdirSync(path, { recursive: true });
}
export const writeSchemaToFile = (schema: GraphQLSchema, path: string, filename = 'schema.graphql'):string => {
  const txt = printSchema(schema);
  mkdrIfNotExist(path);
  const filePath=join(path, filename);
  writeFileSync(filePath, txt);
  return filePath;
}