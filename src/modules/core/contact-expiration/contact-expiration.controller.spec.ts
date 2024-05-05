import { Test, TestingModule } from '@nestjs/testing'
import { ContactExpirationController } from './contact-expiration.controller'
import { ContactExpirationService } from './contact-expiration.service'

describe('ContactExpirationController', () => {
  let controller: ContactExpirationController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactExpirationController],
      providers: [ContactExpirationService],
    }).compile()

    controller = module.get<ContactExpirationController>(ContactExpirationController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
