import { Test, TestingModule } from '@nestjs/testing'
import { EmailTypeController } from './email-type.controller'
import { EmailTypeService } from './email-type.service'

describe('EmailTypeController', () => {
  let controller: EmailTypeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailTypeController],
      providers: [EmailTypeService],
    }).compile()

    controller = module.get<EmailTypeController>(EmailTypeController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
