import { Test, TestingModule } from '@nestjs/testing'
import { PhoneNumberTypeService } from './phone-number-type.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { SeedService } from '../../../database/seeds/utils/seeds.utils'
import { PhoneNumberType } from './entities/phone-number-type.entity'
import { Repository } from 'typeorm'

describe('PhoneNumberTypeService', () => {
  let service: PhoneNumberTypeService
  let seedService: SeedService
  const mockRepository: Partial<Record<keyof Repository<PhoneNumberType>, jest.Mock>> = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PhoneNumberTypeService,
        SeedService,
        {
          provide: getRepositoryToken(PhoneNumberType),
          useValue: mockRepository,
        },
      ],
    }).compile()

    service = module.get<PhoneNumberTypeService>(PhoneNumberTypeService)
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
