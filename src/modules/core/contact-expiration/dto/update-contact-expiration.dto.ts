import { PartialType } from '@nestjs/mapped-types'
import { CreateContactExpirationDto } from './create-contact-expiration.dto'

export class UpdateContactExpirationDto extends PartialType(CreateContactExpirationDto) {}
