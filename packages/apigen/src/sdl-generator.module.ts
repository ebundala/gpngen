import { AppLogger, AppLoggerModule } from '@mechsoft/app-logger';
import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { CONFIG_OPTIONS, SdlGeneratorServiceOptions } from './sdl/config.options';
import { GenerateTypings } from './sdl/GenerateTypes.service';
import { SdlGeneratorService } from './sdl/sdl-generator.service';


@Module({})
export class SdlGeneratorModule implements OnModuleInit {
  constructor(
    private readonly sdlgen: SdlGeneratorService,
    private readonly logger: AppLogger,
    private readonly typings: GenerateTypings) {
    this.logger.setContext(SdlGeneratorModule.name);
  }
  onModuleInit(): Promise<void> {
    return this.run();
  }
  async run(): Promise<void> {

    this.logger.log("............Generating files............")
    await this.sdlgen.run();

    await this.typings.run();
  }
  static forRoot({
    schemaPath,
    customOptions,
    generator,
  }: Partial<SdlGeneratorServiceOptions>): DynamicModule {

    return {
      module: SdlGeneratorModule,
      imports: [AppLoggerModule],
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: { schemaPath, customOptions, generator } as Partial<SdlGeneratorServiceOptions>,
        },
        SdlGeneratorService,
        GenerateTypings
      ],
      exports: [SdlGeneratorService, GenerateTypings],
    };
  }
}
