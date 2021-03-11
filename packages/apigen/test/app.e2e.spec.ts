import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { generate, options } from '../src/index';
import { SdlGeneratorModule } from '../src/sdl-generator.module';
describe('AppController (e2e)', () => {
  let app: INestApplication;
   let config;
  beforeEach(async () => {
    config=options
     const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SdlGeneratorModule.forRoot(config)],
     }).compile();

     app = moduleFixture.createNestApplication();
     await app.init();
  });

   it('generate api code', () => {
     generate(config)
  });
});
