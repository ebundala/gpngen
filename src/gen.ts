import { NestFactory } from '@nestjs/core';
import { GenModule } from './gen.module';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(GenModule);
    await app.init()
}
bootstrap();