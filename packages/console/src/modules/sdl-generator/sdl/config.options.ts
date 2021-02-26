import { Options } from "./Generators";


export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';


export interface TypingsGeneratorOptions {
    typePaths: string[],
    path: string,
    outputAs: 'class' | 'interface'
}

export interface SdlGeneratorServiceOptions {
    schemaPath: string;
    customOptions?: Partial<Options>;
    generator: TypingsGeneratorOptions
};