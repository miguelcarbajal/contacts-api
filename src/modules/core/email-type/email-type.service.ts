import { Injectable } from '@nestjs/common';
import { CreateEmailTypeDto } from './dto/create-email-type.dto';
import { UpdateEmailTypeDto } from './dto/update-email-type.dto';

@Injectable()
export class EmailTypeService {
  create(createEmailTypeDto: CreateEmailTypeDto) {
    return 'This action adds a new emailType';
  }

  findAll() {
    return `This action returns all emailType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailType`;
  }

  update(id: number, updateEmailTypeDto: UpdateEmailTypeDto) {
    return `This action updates a #${id} emailType`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailType`;
  }
}
