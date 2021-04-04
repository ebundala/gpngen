import { DefinitionsGeneratorOptions, GqlModuleOptions } from '@nestjs/graphql';
import { Options } from './Generators';
export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';

export type TypingsGeneratorOptions = {
  typePaths: string[];
  path: string;
  outputAs: 'class' | 'interface';
  watch?: boolean;
  debug?: boolean;
  federation?: boolean;
} & DefinitionsGeneratorOptions

export interface SdlGeneratorServiceOptions {
  schemaPath: string;
  customOptions?: Partial<Options>;
  sdlOptions?: GqlModuleOptions
}
