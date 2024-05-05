import { Type } from 'class-transformer'
import { CreatePersonDto } from '../../person/dto/create-person.dto'
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator'
import { CreatePhoneNumberDto } from '../../phone-number/dto/create-phone-number.dto'
import { CreateEmailDto } from '../../email/dto/create-email.dto'
import { CreateCompanyDto } from '../../company/dto/create-company.dto'
import { CreateGroupDto } from '../../group/dto/create-group.dto'

export class CreateContactDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePersonDto)
  person?: CreatePersonDto

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCompanyDto)
  company?: CreateCompanyDto

  @IsOptional()
  @IsUUID()
  companyId?: string

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreatePhoneNumberDto)
  phoneNumbers?: Array<CreatePhoneNumberDto>

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateEmailDto)
  emails?: Array<CreateEmailDto>

  @IsOptional()
  @IsDateString()
  expiration?: Date

  @IsOptional()
  @IsString()
  note?: string

  @IsOptional()
  @IsUUID()
  groupId?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGroupDto)
  group?: CreateGroupDto
}
