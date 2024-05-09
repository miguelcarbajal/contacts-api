import { Module } from '@nestjs/common'
import { PhoneNumberTypeService } from './phone-number-type.service'
import { PhoneNumberTypeController } from './phone-number-type.controller'
import { PhoneNumberType } from './entities/phone-number-type.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SeedService } from '../../../database/seeds/utils/seeds.utils'

@Module({
  imports: [TypeOrmModule.forFeature([PhoneNumberType])],
  controllers: [PhoneNumberTypeController],
  providers: [PhoneNumberTypeService, SeedService],
})
export class PhoneNumberTypeModule {}
