import { Test, TestingModule } from '@nestjs/testing';
import { MpesaTzService } from './mpesa-tz.service';

describe('MpesaTzService', () => {
  let service: MpesaTzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpesaTzService],
    }).compile();

    service = module.get<MpesaTzService>(MpesaTzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
