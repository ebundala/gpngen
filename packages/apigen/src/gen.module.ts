/* import { AppLoggerModule } from '@mechsoft/app-logger/dist';
import { Module } from '@nestjs/common';
import { options } from './gen.config';
import { SdlGeneratorModule } from './sdl-generator.module';
@Module({
    imports: [
        AppLoggerModule,
        SdlGeneratorModule.forRoot(options)
    ],
})
export class GenModule { }