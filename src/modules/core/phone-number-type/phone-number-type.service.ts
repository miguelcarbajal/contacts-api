import { Injectable } from '@nestjs/common'
import { CreatePhoneNumberTypeDto } from './dto/create-phone-number-type.dto'
import { UpdatePhoneNumberTypeDto } from './dto/update-phone-number-type.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { PhoneNumberType } from './entities/phone-number-type.entity'
import { Repository } from 'typeorm'
import { seedData } from 'src/database/seeds/utils/seeds.utils'
import { seedPhoneNumberTypes } from 'src/database/seeds/core/core.seeds'

@Injectable()
export class PhoneNumberTypeService {
  constructor(
    @InjectRepository(PhoneNumberType)
    private readonly phoneNumberTypeRepository: Repository<PhoneNumberType>
  ) {}

  create(createPhoneNumberTypeDto: CreatePhoneNumberTypeDto) {
    return 'This action adds a new phoneNumberType'
  }

  findAll() {
    return `This action returns all phoneNumberType`
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneNumberType`
  }

  update(id: number, updatePhoneNumberTypeDto: UpdatePhoneNumberTypeDto) {
    return `This action updates a #${id} phoneNumberType`
  }

  remove(id: number) {
    return `This action removes a #${id} phoneNumberType`
  }

  async seed() {
    return await seedData(this.phoneNumberTypeRepository, seedPhoneNumberTypes)
  }
}
