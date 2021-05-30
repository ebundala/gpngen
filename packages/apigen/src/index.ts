import { NestFactory } from '@nestjs/core';
import { SdlGeneratorModule } from './sdlGenerator.module';
import { SdlGeneratorServiceOptions } from './sdl/config.options';
export { DMMF } from '@prisma/client/runtime';
export { getDMMF } from '@prisma/sdk';
export * from './gen.resources.rules';
export * from './graphql.module';
export * from './roles';
export * from './sdl/config.options';
export * from './sdl/CreateQueriesAndMutations';
export * from './sdl/GenerateResourcesRules.service';
export * from './sdl/Generators';
export * from './sdl/schema';
export * from './sdl/GeneratorSdl.service';
import { SdlGeneratorService } from './sdl/GeneratorSdl.service';
export * from './sdl/policy.schema';
export async function generate(
    options: SdlGeneratorServiceOptions
): Promise<void> {
    const app = await NestFactory.create(
        SdlGeneratorModule.forRoot(options)
    );
    const sdl = app.get(SdlGeneratorService);
    await sdl.run();
    await app.init();
    await app.close();
}

