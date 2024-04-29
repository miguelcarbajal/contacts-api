import { Injectable } from '@nestjs/common';
import { CreateContactNoteDto } from './dto/create-contact-note.dto';
import { UpdateContactNoteDto } from './dto/update-contact-note.dto';

@Injectable()
export class ContactNoteService {
  create(createContactNoteDto: CreateContactNoteDto) {
    return 'This action adds a new contactNote';
  }

  findAll() {
    return `This action returns all contactNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactNote`;
  }

  update(id: number, updateContactNoteDto: UpdateContactNoteDto) {
    return `This action updates a #${id} contactNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactNote`;
  }
}
