import { OneToOne, JoinColumn, Entity, PrimaryColumn } from 'typeorm'
import { Contact } from '../../contact/entities/contact.entity'
import { Company } from '../../company/entities/company.entity'

@Entity('company_contacts', { schema: 'core' })
export class CompanyContact {
  @PrimaryColumn('uuid')
  id: string

  @OneToOne(() => Contact, (contact) => contact.personContact)
  @JoinColumn()
  contact: Contact

  @OneToOne(() => Company, (company) => company.companyContact)
  @JoinColumn()
  company: Company
}
