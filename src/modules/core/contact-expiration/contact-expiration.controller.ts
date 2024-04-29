import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactExpirationService } from './contact-expiration.service';
import { CreateContactExpirationDto } from './dto/create-contact-expiration.dto';
import { UpdateContactExpirationDto } from './dto/update-contact-expiration.dto';

@Controller('contact-expiration')
export class ContactExpirationController {
  constructor(private readonly contactExpirationService: ContactExpirationService) {}

  @Post()
  create(@Body() createContactExpirationDto: CreateContactExpirationDto) {
    return this.contactExpirationService.create(createContactExpirationDto);
  }

  @Get()
  findAll() {
    return this.contactExpirationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactExpirationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactExpirationDto: UpdateContactExpirationDto) {
    return this.contactExpirationService.update(+id, updateContactExpirationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactExpirationService.remove(+id);
  }
}
