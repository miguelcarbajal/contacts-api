import { CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import { Email } from '../../email/entities/email.entity'
import { PhoneNumber } from '../../phone-number/entities/phone-number.entity'
import { PersonContact } from '../../person-contact/entities/person-contact.entity'
import { ContactGroup } from '../../contact-group/entities/contact-group.entity'
import { ContactExpiration } from '../../contact-expiration/entities/contact-expiration.entity'
import { ContactNote } from '../../contact-note/entities/contact-note.entity'

@Entity('contacts', { schema: 'core' })
export class Contact {
  @PrimaryColumn('uuid')
  id: string

  @OneToOne(() => PersonContact, (personContact) => personContact.contact)
  personContact: PersonContact

  // Locators
  @OneToMany(() => Email, (email) => email.contact, { onDelete: 'CASCADE' })
  emails: Array<Email>

  @OneToMany(() => PhoneNumber, (phoneNumber) => phoneNumber.contact, { onDelete: 'CASCADE' })
  phoneNumbers: Array<PhoneNumber>

  @OneToOne(() => ContactExpiration, (contactExpiration) => contactExpiration.contact)
  expiration: ContactExpiration

  @OneToOne(() => ContactNote, (contactNote) => contactNote.contact)
  note: ContactNote

  @OneToOne(() => ContactGroup, (contactGroup) => contactGroup.contact)
  contactGroup: ContactGroup

  @CreateDateColumn()
  createdAt: Date
}
