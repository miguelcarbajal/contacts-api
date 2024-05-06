import { Test, TestingModule } from '@nestjs/testing'
import { EmailTypeController } from './email-type.controller'
import { EmailTypeService } from './email-type.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { EmailType } from './entities/email-type.entity'
import { Repository } from 'typeorm'
import { SeedService } from '../../../../src/database/seeds/utils/seeds.utils'

describe('EmailTypeController', () => {
  let controller: EmailTypeController
  let service: EmailTypeService
  const mockRepository: Partial<Record<keyof Repository<EmailType>, jest.Mock>> = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailTypeController],
      providers: [
        EmailTypeService,
        SeedService,
        {
          provide: getRepositoryToken(EmailType),
          useValue: mockRepository,
        },
      ],
    }).compile()

    controller = module.get<EmailTypeController>(EmailTypeController)
    service = module.get<EmailTypeService>(EmailTypeService)
  })

  describe('seed', () => {
    it('should seed email types', async () => {
      const result = { sown: true }

      jest.spyOn(service, 'seed').mockImplementation(async () => result)

      expect(await controller.seed()).toBe(result)
    })
  })
})
