import { Injectable } from '@nestjs/common';
import { CreatePhoneNumberTypeDto } from './dto/create-phone-number-type.dto';
import { UpdatePhoneNumberTypeDto } from './dto/update-phone-number-type.dto';

@Injectable()
export class PhoneNumberTypeService {
  create(createPhoneNumberTypeDto: CreatePhoneNumberTypeDto) {
    return 'This action adds a new phoneNumberType';
  }

  findAll() {
    return `This action returns all phoneNumberType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneNumberType`;
  }

  update(id: number, updatePhoneNumberTypeDto: UpdatePhoneNumberTypeDto) {
    return `This action updates a #${id} phoneNumberType`;
  }

  remove(id: number) {
    return `This action removes a #${id} phoneNumberType`;
  }
}
