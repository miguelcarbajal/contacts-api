import { Test, TestingModule } from '@nestjs/testing'
import { CompanyContactService } from './company-contact.service'

describe('CompanyContactService', () => {
  let service: CompanyContactService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyContactService],
    }).compile()

    service = module.get<CompanyContactService>(CompanyContactService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
