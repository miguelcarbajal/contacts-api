import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CompanyContactService } from './company-contact.service'
import { CreateCompanyContactDto } from './dto/create-company-contact.dto'
import { UpdateCompanyContactDto } from './dto/update-company-contact.dto'

@Controller('company-contact')
export class CompanyContactController {
  constructor(private readonly companyContactService: CompanyContactService) {}

  @Post()
  create(@Body() createCompanyContactDto: CreateCompanyContactDto) {
    return this.companyContactService.create(createCompanyContactDto)
  }

  @Get()
  findAll() {
    return this.companyContactService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyContactService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyContactDto: UpdateCompanyContactDto) {
    return this.companyContactService.update(+id, updateCompanyContactDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyContactService.remove(+id)
  }
}
