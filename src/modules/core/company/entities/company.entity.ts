import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm'
import { CompanyContact } from '../../company-contact/entities/company-contact.entity'

@Entity('companies', { schema: 'core' })
export class Company {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @OneToOne(() => CompanyContact, (companyContact) => companyContact.contact)
  companyContact: CompanyContact
}
