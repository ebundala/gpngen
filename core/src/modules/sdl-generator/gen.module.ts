import { Module } from '@nestjs/common';
import { options } from '../../gen.config';
import { AppLoggerModule } from '../app-logger/app-logger.module';
import { SdlGeneratorModule } from './sdl-generator.module';
@Module({
    imports: [
        AppLoggerModule,
        SdlGeneratorModule.forRoot(options)
    ],
})
export class GenModule { }