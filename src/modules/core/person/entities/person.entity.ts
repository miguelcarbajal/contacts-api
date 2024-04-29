import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { PersonContact } from '../../person-contact/entities/person-contact.entity'

@Entity('persons', { schema: 'core' })
export class Person {
  @PrimaryColumn('uuid')
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

  @OneToOne(() => PersonContact, (personContact) => personContact.person)
  personContact: PersonContact
}
