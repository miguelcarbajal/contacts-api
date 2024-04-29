import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'

@Entity('contact_notes', { schema: 'core' })
export class ContactNote {
  @PrimaryColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.note)
  @JoinColumn()
  contact: Contact

  @Column()
  value: string
}
