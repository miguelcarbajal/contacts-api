import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CompanyContact } from '../../company-contact/entities/company-contact.entity'

@Entity('companies', { schema: 'core' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @OneToOne(() => CompanyContact, (companyContact) => companyContact.contact)
  companyContact: CompanyContact
}
