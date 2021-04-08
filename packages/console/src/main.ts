import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppAuthModule } from './app.auth.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

}
bootstrap2();

async function bootstrap2() {
  const app2 = await NestFactory.create(AppAuthModule)
  await app2.listen(3000)

}