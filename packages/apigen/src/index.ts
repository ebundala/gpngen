import { NestFactory } from '@nestjs/core';
import { SdlGeneratorModule } from './sdl-generator.module';
import { SdlGeneratorServiceOptions } from './sdl/config.options';
export { DMMF } from '@prisma/client/runtime';
export { getDMMF } from '@prisma/sdk';
export * from './gen.config';
export * from './graphql.module';
export * from './sdl/config.options';
export * from './sdl/CreateQueriesAndMutations';
export * from './sdl/GenerateTypes.service';
export * from './sdl/Generators';
export * from './sdl/schema';
export * from './sdl/sdl-generator.service';
export async function generate(
    options: Partial<SdlGeneratorServiceOptions>
): Promise<void> {
    const app = await NestFactory.createApplicationContext(
        SdlGeneratorModule.forRoot(options)
    );
    await app.init();
}

