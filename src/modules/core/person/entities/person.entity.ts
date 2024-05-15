import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'

@Entity('persons', { schema: 'core' })
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column({ nullable: true })
  middleName: string | null

  @Column({ nullable: true })
  lastName: string | null

  @Column({ nullable: true })
  nickName: string | null

  @Column({ nullable: true })
  photoUrl: string | null

  @OneToOne(() => Contact, (contact) => contact.person, { onDelete: 'CASCADE' })
  @JoinColumn()
  contact: Contact
}
