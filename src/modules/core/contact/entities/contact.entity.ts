import { CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Email } from '../../email/entities/email.entity'
import { PhoneNumber } from '../../phone-number/entities/phone-number.entity'
import { ContactGroup } from '../../contact-group/entities/contact-group.entity'
import { ContactExpiration } from '../../contact-expiration/entities/contact-expiration.entity'
import { ContactNote } from '../../contact-note/entities/contact-note.entity'
import { CompanyContact } from '../../company-contact/entities/company-contact.entity'
import { Person } from '../../person/entities/person.entity'

@Entity('contacts', { schema: 'core' })
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Person, (person) => person.contact, { cascade: true })
  person: Person

  @OneToOne(() => CompanyContact, (companyContact) => companyContact.contact, { cascade: true })
  companyContact: CompanyContact

  // Locators
  @OneToMany(() => PhoneNumber, (phoneNumber) => phoneNumber.contact, { cascade: true })
  phoneNumbers: Array<PhoneNumber>

  @OneToMany(() => Email, (email) => email.contact, { cascade: true })
  emails: Array<Email>

  @OneToOne(() => ContactExpiration, (contactExpiration) => contactExpiration.contact, { cascade: true })
  expiration: ContactExpiration

  @OneToOne(() => ContactNote, (contactNote) => contactNote.contact, { cascade: true })
  note: ContactNote

  @OneToOne(() => ContactGroup, (contactGroup) => contactGroup.contact, { cascade: true })
  contactGroup: ContactGroup

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date
}
