import { mergeTypeDefs } from '@graphql-tools/merge';
import { AppLogger } from '@mechsoft/app-logger';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { sdlInputs } from '@paljs/plugins';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { print } from 'graphql/language/printer';
import { CONFIG_OPTIONS, SdlGeneratorServiceOptions } from './config.options';
import { createQueriesAndMutations } from './CreateQueriesAndMutations';
import { Generators } from './Generators';
@Injectable()
export class SdlGeneratorService extends Generators {
  constructor(
    @Inject(CONFIG_OPTIONS)
    { schemaPath, customOptions }: SdlGeneratorServiceOptions,
    private readonly logger: AppLogger,
  ) {
    super(schemaPath, customOptions);
    this.logger.setContext(SdlGeneratorService.name);
  }
  // async onModuleInit() {
  //   await this.run();
  // }
  async run(): Promise<void> {
    this.logger.log('creating models begin');
    await this.createModels();
    this.logger.log('c reating models finish\n');
    this.logger.log('creating inputs begin');
    this.createInputsTypes();
    this.logger.log('creating inputs finish\n');
    this.logger.log('creating modules begin');
    await this.createModulesIndex();
    this.logger.log('creating modules finish\n');

    //this.createMaster();

    /* if (!this.isJS) {
       const generateTypes = new GenerateTypes(await this.dmmf(), this.options);
       const code = generateTypes.run();
       writeFileSync(this.output('../resolversTypes.ts'), this.formation(code));
     }*/
  }

  private resolversPath = this.output(this.withExtension('resolvers'));
  private resolversIndex = existsSync(this.resolversPath)
    ? readFileSync(this.resolversPath, { encoding: 'utf-8' })
    : defaultResolverFile(this.isJS);
  private resolversExport: string[] = getCurrentExport(this.resolversIndex);

  private typeDefsPath = this.output(this.withExtension('typeDefs'));
  private typeDefsIndex = existsSync(this.typeDefsPath)
    ? readFileSync(this.typeDefsPath, { encoding: 'utf-8' })
    : defaultTypeFile(this.isJS);
  private typeDefsExport: string[] = getCurrentExport(this.typeDefsIndex);

  private async createModels() {
    (await this.models()).forEach((model) => {
      this.logger.log(`creating ${model.name} model begin`);
      let fileContent = `type ${model.name} {`;
      const excludeFields = this.excludeFields(model.name);
      model.fields.forEach((field) => {
        // if (!excludeFields.includes(field.name)) {

        //TODO add enforcer directives to field level
        if (!excludeFields.find((v, i) => new RegExp(v).test(field.name))) {
          this.logger.log(`creating field ${model.name}:${field.name} `);
          fileContent += `
          ${field.name}`;
          if (field.args.length > 0) {
            fileContent += '(';
            field.args.forEach((arg) => {
              const isNullable = arg.isNullable ? '' : '!';
              const isRequired = arg.isRequired ? '!' : '';
              const name = arg.name;
              //Todo handle unions if applicable
              const i = arg.inputTypes[0];
              const isList = i.isList;
              const type = i.type;
              const v = isList
                ? `[${type}${isNullable}]${isRequired}`
                : `${type}${isRequired}`;

              fileContent += `${name}: ${v}
              `;
            });
            fileContent += ')';
          }
          fileContent += `: ${field.outputType.isList
            ? `[${field.outputType.type}!]!`
            : field.outputType.type + (field?.isNullable ? '' : '!')
            }`;
        } else {
          this.logger.log(`skipping field ${model.name}:${field.name} `);
        }
      });

      fileContent += `
    }

      type ${model.name}ListResponse {
        status: Boolean!
        data: [${model.name}!]
        message: String!
      }
     

      type ${model.name}Response {
        status: Boolean!
        data: ${model.name}
        message: String!
      }
      
      type ${model.name}BatchResponse {
        status: Boolean!
        data: BatchPayload
        message: String!
      }
      type Aggregate${model.name}Response {
        status: Boolean!
        data: Aggregate${model.name}
        message: String!
      }
      type ${model.name}CountResponse {
        status: Boolean!
        data: Int
        message: String!
      }
      `;
      this.logger.log(`writing to files ${model.name} start`);
      this.createFiles(model.name, fileContent);
      this.logger.log(`writing to files for ${model.name} finish`);

      this.logger.log(`creating ${model.name} model finish`);
    });
  }

  private createInputsTypes() {
    const typeDefs = `
     directive @auth on FIELD_DEFINITION | INPUT_FIELD_DEFINITION 
    ${print(mergeTypeDefs([sdlInputs()]))}
     type Query{
       version:String
     }
     type Mutation{
      version:String
    }

    `;
    this.logger.log(`writing inputs to files begin`);

    this.mkdir(this.output('common'));
    writeFileSync(this.output('common', `common.graphql`), typeDefs);
    this.logger.log(`writing inputs to files end`);
  }
  private getOperations(model: string) {
    const exclude = this.excludedOperations(model);
    return createQueriesAndMutations(
      model,
      this.smallModel(model),
      exclude,
      this.options.onDelete,
    );
  }

  private createFiles(model: string, typeContent: string) {
    const operations = this.getOperations(model);
    this.mkdir(this.output(model));

    let resolvers = '';
    if (!this.disableQueries(model)) {
      resolvers += operations.queries.resolver;
      typeContent += operations.queries.type;
    }
    if (!this.disableMutations(model)) {
      resolvers += operations.mutations.resolver;
      typeContent += operations.mutations.type;
    }
    this.createResolvers(resolvers, model);
    this.createTypes(typeContent, model);
    this.createModule(model);
  }
  private createModule(model) {
    const content = `
    import { Module } from '@nestjs/common';
    //import { PrismaClientModule } from '@mechsoft/prisma-client';
    import { ${model}Resolver } from './${model}Resolvers';

    @Module({
      //imports:[PrismaClientModule],
      providers:[${model}Resolver]
    })
    export class ${model}Module{}
    `;

    writeFileSync(
      this.output(model, this.withExtension(`${model}Module`)),
      content,
    );
  }
  private async createModulesIndex() {
    const models = (await this.models()).map((t) => t.name);
    const content = `${models
      .map(
        (model) => `import {${model}Module} from './${model}/${model}Module';`,
      )
      .join('\n')}
    export default [${models.map((model) => `${model}Module`).join(',\n')}];
    `;
    writeFileSync(this.output('', this.withExtension(`index`)), content);
  }
  private createResolvers(resolvers: string, model: string) {
    //if (resolvers) {

    resolvers = `
      import { Resolver, Mutation,Query,Info, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
      import { 
      ${model},
      ${model}Response,
      ${model}BatchResponse,
      ${model}CountResponse,
      ${model}ListResponse,
      Aggregate${model}Response,
    //  ${model}CreateInput,
    //  ${model}UpdateInput,
     // ${model}UpdateManyMutationInput,
     // ${model}WhereUniqueInput,
     // ${model}WhereInput,
     // ${model}OrderByInput,
     // ${model}ScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';

      @Resolver((of)=>${model})
      export class ${model}Resolver {
          
         ${resolvers}
        }`;
    writeFileSync(
      this.output(model, this.withExtension(`${model}Resolvers`)),
      resolvers,
    );

    // }
  }

  private createTypes(fileContent: string, model: string) {
    writeFileSync(this.output(model, `${model}.graphql`), fileContent);
  }

  private createMaster() {
    /* writeFileSync(
       this.resolversPath,
       this.formation(replaceExports(this.resolversExport, this.resolversIndex)),
     );
     writeFileSync(
       this.typeDefsPath,
       this.formation(replaceExports(this.typeDefsExport, this.typeDefsIndex)),
     );*/
  }
}

const replaceExports = (exports: string[], text: string) => {
  const matchText = text.match(/\[([\S\s]*?)]/);
  if (matchText) {
    return text.replace(
      matchText[0],
      JSON.stringify(exports).replace(/"/g, ''),
    );
  }
  return '';
};

const getCurrentExport = (text: string) => {
  const matchText = text.match(/\[([\S\s]*?)]/);
  if (matchText) {
    return matchText[1]
      .split(',')
      .filter((a) => a)
      .map((a) => a.replace(/\s/g, ''));
  }
  return [];
};

const defaultResolverFile = (isJs?: boolean) =>
  isJs
    ? `
    const resolvers = [];
    
    module.exports = {resolvers};`
    : `export default [];`;
const defaultTypeFile = (isJs?: boolean) =>
  isJs
    ? `const { mergeTypeDefs } = require('@graphql-tools/merge');
const { sdlInputs } = require('@paljs/plugins');

const typeDefs = mergeTypeDefs([sdlInputs()]);

module.exports = {typeDefs};`
    : `import { mergeTypeDefs } from '@graphql-tools/merge';
import { sdlInputs } from '@paljs/plugins';

export default mergeTypeDefs([sdlInputs()]);`;
