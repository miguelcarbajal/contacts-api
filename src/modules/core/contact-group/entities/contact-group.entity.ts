import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { Group } from '../../group/entities/group.entity'

@Entity('contact_groups', { schema: 'core' })
export class ContactGroup {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.contactGroup, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact

  @ManyToOne(() => Group, (group) => group.contactGroups)
  @JoinColumn()
  group: Group
}
