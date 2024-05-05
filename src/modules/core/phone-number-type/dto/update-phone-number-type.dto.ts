import { PartialType } from '@nestjs/mapped-types'
import { CreatePhoneNumberTypeDto } from './create-phone-number-type.dto'

export class UpdatePhoneNumberTypeDto extends PartialType(CreatePhoneNumberTypeDto) {}
