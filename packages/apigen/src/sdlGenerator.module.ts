import { AppLogger, AppLoggerModule } from '@mechsoft/app-logger';
import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CONFIG_OPTIONS, SdlGeneratorServiceOptions } from './sdl/config.options';
import { GenerateResourcesRules } from './sdl/GenerateResourcesRules.service';
import { SdlGeneratorService } from './sdl/GeneratorSdl.service';


@Module({

})
export class SdlGeneratorModule {
  constructor(
    private readonly sdlgen: SdlGeneratorService,
    private readonly logger: AppLogger,
    private readonly typings: GenerateResourcesRules) {
    //this.logger.setContext(SdlGeneratorModule.name);
  }


  static forRoot({
    schemaPath,
    customOptions,
    sdlOptions
  }: SdlGeneratorServiceOptions): DynamicModule {
    const modules: DynamicModule[] = []
    if (customOptions.genTypes) {
      modules.push(
        GraphQLModule.forRoot(sdlOptions)
      )
    }
    return {
      module: SdlGeneratorModule,
      imports: [AppLoggerModule, ...modules],
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: { schemaPath, customOptions, sdlOptions } as SdlGeneratorServiceOptions,
        },
        SdlGeneratorService,
        GenerateResourcesRules
      ],
      exports: [SdlGeneratorService, GenerateResourcesRules],
    };
  }
}
