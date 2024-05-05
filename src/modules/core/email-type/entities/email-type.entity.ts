import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('email_types', { schema: 'core' })
export class EmailType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
