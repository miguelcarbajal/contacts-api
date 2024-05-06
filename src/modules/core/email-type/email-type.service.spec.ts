import { Test, TestingModule } from '@nestjs/testing'
import { EmailTypeService } from './email-type.service'
import { SeedService } from '../../../database/seeds/utils/seeds.utils'
import { getRepositoryToken } from '@nestjs/typeorm'
import { EmailType } from './entities/email-type.entity'
import { Repository } from 'typeorm'

describe('EmailTypeService', () => {
  let service: EmailTypeService
  let seedService: SeedService
  const mockRepository: Partial<Record<keyof Repository<EmailType>, jest.Mock>> = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailTypeService,
        SeedService,
        {
          provide: getRepositoryToken(EmailType),
          useValue: mockRepository,
        },
      ],
    }).compile()

    service = module.get<EmailTypeService>(EmailTypeService)
    seedService = module.get<SeedService>(SeedService)
  })

  describe('seed', () => {
    it('should seed data', async () => {
      const seedResult = { sown: true }

      jest.spyOn(seedService, 'seedData').mockImplementation(async () => seedResult)

      expect(await service.seed()).toEqual(seedResult)
    })
  })
})
