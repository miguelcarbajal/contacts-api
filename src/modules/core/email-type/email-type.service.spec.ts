import { Test, TestingModule } from '@nestjs/testing'
import { EmailTypeService } from './email-type.service'

describe('EmailTypeService', () => {
  let service: EmailTypeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailTypeService],
    }).compile()

    service = module.get<EmailTypeService>(EmailTypeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
