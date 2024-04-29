import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumberTypeController } from './phone-number-type.controller';
import { PhoneNumberTypeService } from './phone-number-type.service';

describe('PhoneNumberTypeController', () => {
  let controller: PhoneNumberTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumberTypeController],
      providers: [PhoneNumberTypeService],
    }).compile();

    controller = module.get<PhoneNumberTypeController>(PhoneNumberTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
