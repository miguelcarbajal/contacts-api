import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('phone_number_types', { schema: 'core' })
export class PhoneNumberType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string
}
