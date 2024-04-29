import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('email_types', { schema: 'core' })
export class EmailType {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string
}
