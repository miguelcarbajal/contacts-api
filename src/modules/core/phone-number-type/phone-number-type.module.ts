import { Module } from '@nestjs/common';
import { PhoneNumberTypeService } from './phone-number-type.service';
import { PhoneNumberTypeController } from './phone-number-type.controller';

@Module({
  controllers: [PhoneNumberTypeController],
  providers: [PhoneNumberTypeService],
})
export class PhoneNumberTypeModule {}
