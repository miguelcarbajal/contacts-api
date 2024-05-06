import { Test, TestingModule } from '@nestjs/testing'
import { PhoneNumberTypeController } from './phone-number-type.controller'
import { PhoneNumberTypeService } from './phone-number-type.service'
import { SeedService } from '../../../database/seeds/utils/seeds.utils'
import { getRepositoryToken } from '@nestjs/typeorm'
import { PhoneNumberType } from './entities/phone-number-type.entity'
import { Repository } from 'typeorm'

describe('PhoneNumberTypeController', () => {
  let controller: PhoneNumberTypeController
  let service: PhoneNumberTypeService
  const mockRepository: Partial<Record<keyof Repository<PhoneNumberType>, jest.Mock>> = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumberTypeController],
      providers: [
        PhoneNumberTypeService,
        SeedService,
        {
          provide: getRepositoryToken(PhoneNumberType),
          useValue: mockRepository,
        },
      ],
    }).compile()

    controller = module.get<PhoneNumberTypeController>(PhoneNumberTypeController)
    service = module.get<PhoneNumberTypeService>(PhoneNumberTypeService)
  })

  describe('seed', () => {
    it('should seed email types', async () => {
      const result = { sown: true }

      jest.spyOn(service, 'seed').mockImplementation(async () => result)

      expect(await controller.seed()).toBe(result)
    })
  })
})
