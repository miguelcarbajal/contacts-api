import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('phone_number_types', { schema: 'core' })
export class PhoneNumberType {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string
}
