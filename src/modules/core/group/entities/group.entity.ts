import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { ContactGroup } from '../../contact-group/entities/contact-group.entity'

@Entity('groups', { schema: 'core' })
export class Group {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => ContactGroup, (contactGroup) => contactGroup.group, { onDelete: 'CASCADE' })
  contactGroups: Array<ContactGroup>

  @CreateDateColumn()
  createdAt: Date
}
