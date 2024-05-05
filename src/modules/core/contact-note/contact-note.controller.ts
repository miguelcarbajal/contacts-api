import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ContactNoteService } from './contact-note.service'
import { CreateContactNoteDto } from './dto/create-contact-note.dto'
import { UpdateContactNoteDto } from './dto/update-contact-note.dto'

@Controller('contact-note')
export class ContactNoteController {
  constructor(private readonly contactNoteService: ContactNoteService) {}

  @Post()
  create(@Body() createContactNoteDto: CreateContactNoteDto) {
    return this.contactNoteService.create(createContactNoteDto)
  }

  @Get()
  findAll() {
    return this.contactNoteService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactNoteService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactNoteDto: UpdateContactNoteDto) {
    return this.contactNoteService.update(+id, updateContactNoteDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactNoteService.remove(+id)
  }
}
