import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailTypeService } from './email-type.service';
import { CreateEmailTypeDto } from './dto/create-email-type.dto';
import { UpdateEmailTypeDto } from './dto/update-email-type.dto';

@Controller('email-type')
export class EmailTypeController {
  constructor(private readonly emailTypeService: EmailTypeService) {}

  @Post()
  create(@Body() createEmailTypeDto: CreateEmailTypeDto) {
    return this.emailTypeService.create(createEmailTypeDto);
  }

  @Get()
  findAll() {
    return this.emailTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailTypeDto: UpdateEmailTypeDto) {
    return this.emailTypeService.update(+id, updateEmailTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailTypeService.remove(+id);
  }
}
