import { Injectable } from '@nestjs/common'
import { CreateEmailTypeDto } from './dto/create-email-type.dto'
import { UpdateEmailTypeDto } from './dto/update-email-type.dto'
import { SeedService } from '../../../database/seeds/utils/seeds.utils'
import { InjectRepository } from '@nestjs/typeorm'
import { EmailType } from './entities/email-type.entity'
import { Repository } from 'typeorm'
import { seedEmailTypes } from '../../../database/seeds/core/core.seeds'

@Injectable()
export class EmailTypeService {
  constructor(
    @InjectRepository(EmailType)
    private readonly emailTypeRepository: Repository<EmailType>,
    private readonly seedService: SeedService
  ) {}

  create(createEmailTypeDto: CreateEmailTypeDto) {
    return 'This action adds a new emailType'
  }

  findAll() {
    return this.emailTypeRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} emailType`
  }

  update(id: number, updateEmailTypeDto: UpdateEmailTypeDto) {
    return `This action updates a #${id} emailType`
  }

  remove(id: number) {
    return `This action removes a #${id} emailType`
  }

  async seed() {
    return await this.seedService.seedData(this.emailTypeRepository, seedEmailTypes)
  }
}
