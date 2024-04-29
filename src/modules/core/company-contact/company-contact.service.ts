import { Injectable } from '@nestjs/common'
import { CreateCompanyContactDto } from './dto/create-company-contact.dto'
import { UpdateCompanyContactDto } from './dto/update-company-contact.dto'

@Injectable()
export class CompanyContactService {
  create(createCompanyContactDto: CreateCompanyContactDto) {
    return 'This action adds a new companyContact'
  }

  findAll() {
    return `This action returns all companyContact`
  }

  findOne(id: number) {
    return `This action returns a #${id} companyContact`
  }

  update(id: number, updateCompanyContactDto: UpdateCompanyContactDto) {
    return `This action updates a #${id} companyContact`
  }

  remove(id: number) {
    return `This action removes a #${id} companyContact`
  }
}
