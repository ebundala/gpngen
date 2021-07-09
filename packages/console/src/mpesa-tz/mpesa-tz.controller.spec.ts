import { Test, TestingModule } from '@nestjs/testing';
import { MpesaTzController } from './mpesa-tz.controller';

describe('MpesaTz Controller', () => {
  let controller: MpesaTzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpesaTzController],
    }).compile();

    controller = module.get<MpesaTzController>(MpesaTzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
