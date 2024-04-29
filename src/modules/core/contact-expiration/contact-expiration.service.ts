import { Injectable } from '@nestjs/common';
import { CreateContactExpirationDto } from './dto/create-contact-expiration.dto';
import { UpdateContactExpirationDto } from './dto/update-contact-expiration.dto';

@Injectable()
export class ContactExpirationService {
  create(createContactExpirationDto: CreateContactExpirationDto) {
    return 'This action adds a new contactExpiration';
  }

  findAll() {
    return `This action returns all contactExpiration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactExpiration`;
  }

  update(id: number, updateContactExpirationDto: UpdateContactExpirationDto) {
    return `This action updates a #${id} contactExpiration`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactExpiration`;
  }
}
