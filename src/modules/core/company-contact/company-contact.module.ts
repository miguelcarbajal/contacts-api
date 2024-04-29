import { Module } from '@nestjs/common'
import { CompanyContactService } from './company-contact.service'
import { CompanyContactController } from './company-contact.controller'

@Module({
  controllers: [CompanyContactController],
  providers: [CompanyContactService],
})
export class CompanyContactModule {}
