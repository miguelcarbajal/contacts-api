import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { Company } from '../../company/entities/company.entity'

@Entity('company_contacts', { schema: 'core' })
export class CompanyContact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.personContact)
  @JoinColumn()
  contact: Contact

  @OneToOne(() => Company, (company) => company.companyContact)
  @JoinColumn()
  company: Company
}
