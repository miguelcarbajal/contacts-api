import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { EmailType } from '../../email-type/entities/email-type.entity'

@Entity('emails', { schema: 'core' })
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Contact, (contact) => contact.emails, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact

  @ManyToOne(() => EmailType)
  @JoinColumn()
  type: EmailType

  @Column()
  value: string

  @Column({ type: 'bool', default: false })
  isPrimary: boolean
}
