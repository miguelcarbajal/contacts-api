import { Test, TestingModule } from '@nestjs/testing'
import { CompanyContactController } from './company-contact.controller'
import { CompanyContactService } from './company-contact.service'

describe('CompanyContactController', () => {
  let controller: CompanyContactController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyContactController],
      providers: [CompanyContactService],
    }).compile()

    controller = module.get<CompanyContactController>(CompanyContactController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
