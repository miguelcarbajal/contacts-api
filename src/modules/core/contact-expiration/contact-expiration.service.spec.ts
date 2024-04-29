import { Test, TestingModule } from '@nestjs/testing';
import { ContactExpirationService } from './contact-expiration.service';

describe('ContactExpirationService', () => {
  let service: ContactExpirationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactExpirationService],
    }).compile();

    service = module.get<ContactExpirationService>(ContactExpirationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
