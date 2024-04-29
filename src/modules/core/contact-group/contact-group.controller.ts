import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ContactGroupService } from './contact-group.service'
import { CreateContactGroupDto } from './dto/create-contact-group.dto'
import { UpdateContactGroupDto } from './dto/update-contact-group.dto'

@Controller('contact-group')
export class ContactGroupController {
  constructor(private readonly contactGroupService: ContactGroupService) {}

  @Post()
  create(@Body() createContactGroupDto: CreateContactGroupDto) {
    return this.contactGroupService.create(createContactGroupDto)
  }

  @Get()
  findAll() {
    return this.contactGroupService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactGroupService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactGroupDto: UpdateContactGroupDto
  ) {
    return this.contactGroupService.update(+id, updateContactGroupDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactGroupService.remove(+id)
  }
}
