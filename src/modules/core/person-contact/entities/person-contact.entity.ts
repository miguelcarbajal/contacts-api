import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { Person } from '../../person/entities/person.entity'

@Entity('person_contacts', { schema: 'core' })
export class PersonContact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.personContact)
  @JoinColumn()
  contact: Contact

  @OneToOne(() => Person, (person) => person.personContact)
  @JoinColumn()
  person: Person
}
