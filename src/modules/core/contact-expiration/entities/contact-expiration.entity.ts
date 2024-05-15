import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'

@Entity('contact_expirations', { schema: 'core' })
export class ContactExpiration {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.expiration, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact

  @Column({ type: 'timestamp' })
  expiresAt: Date
}
