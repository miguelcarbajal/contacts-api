import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'

@Entity('contact_notes', { schema: 'core' })
export class ContactNote {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.note, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact

  @Column()
  value: string
}
