import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { Group } from '../../group/entities/group.entity'

@Entity('contact_groups', { schema: 'core' })
export class ContactGroup {
  @PrimaryColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.contactGroup)
  @JoinColumn()
  contact: Contact

  @OneToMany(() => Group, (group) => group.contactGroups)
  @JoinColumn()
  group: Group
}
