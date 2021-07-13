import { NestFactory } from '@nestjs/core';
import { AppAuthModule } from './app.auth.module'
export async function bootstrap2() {
    const app2 = await NestFactory.create(AppAuthModule)
    await app2.listen(4000);
    

}

bootstrap2()