import { NestFactory } from '@nestjs/core';
import { SdlGeneratorModule } from './sdlGenerator.module';
import { SdlGeneratorServiceOptions } from './sdl/config.options';
export { DMMF } from '@prisma/client/runtime';
export { getDMMF } from '@prisma/sdk';
export * from '../test/prisma/gen.config.example';
export * from './gen.resources.rules';
export * from './graphql.module';
export * from './roles';
export * from './sdl/config.options';
export * from './sdl/CreateQueriesAndMutations';
export * from './sdl/GenerateResourcesRules.service';
export * from './sdl/Generators';
export * from './sdl/schema';
export * from './sdl/GeneratorSdl.service';
import { } from '@nestjs/core'
import { SdlGeneratorService } from './sdl/GeneratorSdl.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GenerateResourcesRules } from './sdl/GenerateResourcesRules.service';
import { AppLogger, AppLoggerModule } from '@mechsoft/app-logger';
export async function generate(
    options: SdlGeneratorServiceOptions
): Promise<void> {
    const app = await NestFactory.create(
        SdlGeneratorModule.forRoot(options)
    );
    const sdl = app.get(SdlGeneratorService);
    const resources = app.get(GenerateResourcesRules)
    await sdl.run();
    await resources.run();

    //const g = app.select(GraphQLModule)
    //const logger = g.get(AppLogger)
    //logger.debug("found logger ")
   // await g.init()
   // await app.close();
    await app.init();
    await app.close();
}

