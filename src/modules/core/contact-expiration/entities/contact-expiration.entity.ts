import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'

@Entity('contact_expirations', { schema: 'core' })
export class ContactExpiration {
  @PrimaryColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.expiration)
  @JoinColumn()
  contact: Contact

  @Column({ type: 'timestamp' })
  expiresAt: Date
}
