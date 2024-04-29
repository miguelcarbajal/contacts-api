import { Injectable } from '@nestjs/common'
import { CreateContactGroupDto } from './dto/create-contact-group.dto'
import { UpdateContactGroupDto } from './dto/update-contact-group.dto'

@Injectable()
export class ContactGroupService {
  create(createContactGroupDto: CreateContactGroupDto) {
    return 'This action adds a new contactGroup'
  }

  findAll() {
    return `This action returns all contactGroup`
  }

  findOne(id: number) {
    return `This action returns a #${id} contactGroup`
  }

  update(id: number, updateContactGroupDto: UpdateContactGroupDto) {
    return `This action updates a #${id} contactGroup`
  }

  remove(id: number) {
    return `This action removes a #${id} contactGroup`
  }
}
