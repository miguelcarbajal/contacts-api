import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { PhoneNumberType } from '../../phone-number-type/entities/phone-number-type.entity'

@Entity('phone_numbers', { schema: 'core' })
export class PhoneNumber {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Contact, (contact) => contact.emails, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact

  @ManyToOne(() => PhoneNumberType)
  @JoinColumn()
  type: PhoneNumberType

  @Column()
  value: string

  @Column({ type: 'bool', default: false })
  isPrimary: boolean
}
