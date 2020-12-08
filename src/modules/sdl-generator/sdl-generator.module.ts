import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { CONFIG_OPTIONS, SdlGeneratorServiceOptions } from './sdl/config.options';
import { GenerateTypings } from './sdl/GenerateTypes.service';
import { SdlGeneratorService } from './sdl/sdl-generator.service';


@Module({})
export class SdlGeneratorModule implements OnModuleInit {
  constructor(
    private readonly sdlgen: SdlGeneratorService,
    private readonly typings: GenerateTypings) { }
  onModuleInit(): Promise<void> {
    return this.run();
  }
  async run() {

    console.log("............generating files............")
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
