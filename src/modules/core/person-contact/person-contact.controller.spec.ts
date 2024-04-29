import { Test, TestingModule } from '@nestjs/testing'
import { PersonContactController } from './person-contact.controller'
import { PersonContactService } from './person-contact.service'

describe('PersonContactController', () => {
  let controller: PersonContactController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonContactController],
      providers: [PersonContactService],
    }).compile()

    controller = module.get<PersonContactController>(PersonContactController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
