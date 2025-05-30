import { Test, TestingModule } from '@nestjs/testing'
import { ContactGroupController } from './contact-group.controller'
import { ContactGroupService } from './contact-group.service'

describe('ContactGroupController', () => {
  let controller: ContactGroupController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactGroupController],
      providers: [ContactGroupService],
    }).compile()

    controller = module.get<ContactGroupController>(ContactGroupController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
