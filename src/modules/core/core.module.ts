import { Module } from '@nestjs/common'
import { CompanyContactModule } from './company-contact/company-contact.module'
import { PersonContactModule } from './person-contact/person-contact.module'
import { CompanyModule } from './company/company.module'
import { ContactModule } from './contact/contact.module'
import { EmailModule } from './email/email.module'
import { PhoneNumberModule } from './phone-number/phone-number.module'
import { GroupModule } from './group/group.module'
import { ContactGroupModule } from './contact-group/contact-group.module'
import { PersonModule } from './person/person.module'
import { EmailTypeModule } from './email-type/email-type.module'
import { PhoneNumberTypeModule } from './phone-number-type/phone-number-type.module'
import { ContactNoteModule } from './contact-note/contact-note.module'
import { ContactExpirationModule } from './contact-expiration/contact-expiration.module'

@Module({
  imports: [
    PersonModule,
    CompanyModule,
    ContactModule,
    EmailModule,
    PhoneNumberModule,
    GroupModule,
    ContactGroupModule,
    PersonContactModule,
    CompanyContactModule,
    EmailTypeModule,
    PhoneNumberTypeModule,
    ContactNoteModule,
    ContactExpirationModule,
  ],
})
export class CoreModule {}
