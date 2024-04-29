import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumberTypeService } from './phone-number-type.service';

describe('PhoneNumberTypeService', () => {
  let service: PhoneNumberTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneNumberTypeService],
    }).compile();

    service = module.get<PhoneNumberTypeService>(PhoneNumberTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
