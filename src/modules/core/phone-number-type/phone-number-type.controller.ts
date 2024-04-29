import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhoneNumberTypeService } from './phone-number-type.service';
import { CreatePhoneNumberTypeDto } from './dto/create-phone-number-type.dto';
import { UpdatePhoneNumberTypeDto } from './dto/update-phone-number-type.dto';

@Controller('phone-number-type')
export class PhoneNumberTypeController {
  constructor(private readonly phoneNumberTypeService: PhoneNumberTypeService) {}

  @Post()
  create(@Body() createPhoneNumberTypeDto: CreatePhoneNumberTypeDto) {
    return this.phoneNumberTypeService.create(createPhoneNumberTypeDto);
  }

  @Get()
  findAll() {
    return this.phoneNumberTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneNumberTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneNumberTypeDto: UpdatePhoneNumberTypeDto) {
    return this.phoneNumberTypeService.update(+id, updatePhoneNumberTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneNumberTypeService.remove(+id);
  }
}
