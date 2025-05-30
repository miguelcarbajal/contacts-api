import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ContactGroup } from '../../contact-group/entities/contact-group.entity'

@Entity('groups', { schema: 'core' })
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => ContactGroup, (contactGroup) => contactGroup.group, { onDelete: 'CASCADE' })
  contactGroups: Array<ContactGroup>

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date
}
