import { Module } from '@nestjs/common';
import { join } from 'path';
import { SdlGeneratorModule } from './modules/sdl-generator/sdl-generator.module';
@Module({
    imports: [
        SdlGeneratorModule.forRoot({
            schemaPath: './prisma/schema.prisma',
            customOptions: {
                onDelete: true,
                output: './src/schemas',
            },
            generator: {
                typePaths: ['./src/schemas/**/*.graphql'],
                path: join(process.cwd(), 'src/models/graphql.ts'),
                outputAs: 'class',
            }
        })
    ],
})
export class GenModule { }