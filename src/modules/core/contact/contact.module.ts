import { Module } from '@nestjs/common'
import { ContactService } from './contact.service'
import { ContactController } from './contact.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CompanyContact } from '../company-contact/entities/company-contact.entity'
import { Company } from '../company/entities/company.entity'
import { ContactExpiration } from '../contact-expiration/entities/contact-expiration.entity'
import { ContactGroup } from '../contact-group/entities/contact-group.entity'
import { ContactNote } from '../contact-note/entities/contact-note.entity'
import { EmailType } from '../email-type/entities/email-type.entity'
import { Email } from '../email/entities/email.entity'
import { Group } from '../group/entities/group.entity'
import { Person } from '../person/entities/person.entity'
import { PhoneNumberType } from '../phone-number-type/entities/phone-number-type.entity'
import { PhoneNumber } from '../phone-number/entities/phone-number.entity'
import { Contact } from './entities/contact.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact, Person, Company, Group, PhoneNumber, PhoneNumberType, Email, EmailType, CompanyContact, ContactNote, ContactExpiration, ContactGroup]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
