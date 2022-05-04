import { DMMF } from '@prisma/client/runtime';
import { GraphQLSchema } from 'graphql';
import { writeFileSync } from 'fs';
import { Options } from './Generators';


const testedTypes: string[] = [];

export const hasEmptyTypeFields = (type: string, options?: Options) => {
  let schema = options?.dmmf?.schema;
  if (!schema) {
    const { Prisma } = require('@prisma/client');
    schema = Prisma.dmmf?.schema;
  }
  testedTypes.push(type);
  const inputObjectTypes = schema ? [...schema?.inputObjectTypes.prisma] : [];
  if (schema?.inputObjectTypes.model)
    inputObjectTypes.push(...schema.inputObjectTypes.model);

  const inputType = inputObjectTypes.find((item) => item.name === type);
  if (inputType) {
    if (inputType.fields.length === 0) return true;
    for (const field of inputType.fields) {
      const fieldType = getInputType(field, options);
      if (
        fieldType.type !== type &&
        fieldType.location === 'inputObjectTypes' &&
        !testedTypes.includes(fieldType.type as string)
      ) {
        const state = hasEmptyTypeFields(fieldType.type as string, options);
        if (state) return true;
      }
    }
  }
  return false;
};
export const fieldTypeOverrides=(fieldType: string,options: Options): string =>{
  return options.modelFieldTypeOverrides?.[fieldType] ?? fieldType;
}
export const getInputType = (
  field: DMMF.SchemaArg,
  options?: Options,
) => {
  let index: number = 0;
  let item;
  if (
    options?.doNotUseFieldUpdateOperationsInput &&
    field.inputTypes.length > 1 &&
    (field.inputTypes[1].type as string).endsWith('FieldUpdateOperationsInput')
  ) {
    item = field.inputTypes[index]
    item.type=fieldTypeOverrides(item.type,options);
  }
  if (
    field.inputTypes.length > 1 &&
    (field.inputTypes[1].location === 'inputObjectTypes' ||
      field.inputTypes[1].isList)
  ) {
    index = 1;
    item = field.inputTypes[index]
    item.type=fieldTypeOverrides(item.type,options);
  }

  return item;
};

function createInput(options: Options) {
  let schema = options.dmmf.schema;
  
  let fileContent = `
  scalar DateTime
  scalar Upload
  
  type BatchPayload {
  count: Int!
}
`;
  if (schema) {
    const enums = [...schema.enumTypes.prisma];
    if (schema.enumTypes.model) enums.push(...schema.enumTypes.model);
    enums.forEach((item) => {
      fileContent += `enum ${item.name} {`;
      item.values.forEach((item2) => {
        fileContent += `
        ${item2}`;
      });
      fileContent += `}
  
  `;
    });
    const inputObjectTypes = [...schema.inputObjectTypes.prisma];
    if (schema.inputObjectTypes.model)
      inputObjectTypes.push(...schema.inputObjectTypes.model);

    inputObjectTypes.forEach((input) => {
      if (input.fields.length > 0) {
        
        fileContent += `input ${input.name} {
      `;
        const inputFields =
          typeof options?.filterInputs === 'function'
            ? options.filterInputs(input)
            : input.fields;
        inputFields
          .filter((field) => !options?.excludeFields?.includes(field.name))
          .forEach((field) => {
            const inputType = getInputType(field, options);
            const hasEmptyType =
              inputType.location === 'inputObjectTypes' &&
              hasEmptyTypeFields(inputType.type as string, options);
            if (!hasEmptyType) {
              fileContent += `${field.name}: ${
                inputType.isList ? `[${inputType.type}!]` : inputType.type
              }${field.isRequired ? '!' : ''}
        `;
            }
          });
        fileContent += `}
    
  `;
      }
    });

    schema?.outputObjectTypes.prisma
      .filter(
        (type) =>
          type.name.includes('Aggregate') ||
          type.name.endsWith('CountOutputType'),
      )
      .forEach((type) => {
        fileContent += `type ${type.name} {
      `;
        type.fields
          .filter((field) => !options?.excludeFields?.includes(field.name))
          .forEach((field) => {
            fileContent += `${field.name}: ${
              field.outputType.isList
                ? `[${field.outputType.type}!]`
                : field.outputType.type
            }${!field.isNullable ? '!' : ''}
        `;
          });
        fileContent += `}
    
  `;
      });
  }
  return fileContent;
}

export const sdlInputs = (options?: Options) => {
  const gql = require('graphql-tag');
  return gql`
   ${createInput(options)}
`;
};

export const generateGraphQlSDLFile = (
  schema: GraphQLSchema,
  path: string = 'schema.graphql',
) => {
  const { printSchema } = require('graphql');
  writeFileSync(path, printSchema(schema));
};
