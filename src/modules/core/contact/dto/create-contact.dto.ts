import { Type } from 'class-transformer'
import { CreatePersonDto } from '../../person/dto/create-person.dto'
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator'
import { CreatePhoneNumberDto } from '../../phone-number/dto/create-phone-number.dto'
import { CreateEmailDto } from '../../email/dto/create-email.dto'
import { CreateCompanyDto } from '../../company/dto/create-company.dto'
import { CreateGroupDto } from '../../group/dto/create-group.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class CreateContactDto {
  @ApiPropertyOptional({ description: 'Person information, required when companyId and company are not provided', required: false, type: CreatePersonDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePersonDto)
  person?: CreatePersonDto

  @ApiPropertyOptional({ description: 'Company information, required when person and companyId are not provided', required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCompanyDto)
  company?: CreateCompanyDto

  @ApiPropertyOptional({ description: 'Existing company identifier, required when person and company are not provided', required: false })
  @IsOptional()
  @IsUUID()
  companyId?: string

  @ApiPropertyOptional({ required: false, isArray: true, minItems: 1, type: [CreatePhoneNumberDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreatePhoneNumberDto)
  phoneNumbers?: Array<CreatePhoneNumberDto>

  @ApiPropertyOptional({ required: false, isArray: true, minItems: 1, type: [CreateEmailDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateEmailDto)
  emails?: Array<CreateEmailDto>

  @ApiPropertyOptional({ description: 'Expiration date when contact will be automatically deleted', required: false })
  @IsOptional()
  @IsDateString()
  expiration?: Date

  @ApiPropertyOptional({ required: false })
  @IsOptional()
  @IsString()
  note?: string

  @ApiPropertyOptional({ description: 'Existing group identifier', nullable: true, required: false })
  @IsOptional()
  @IsUUID()
  groupId?: string

  @ApiPropertyOptional({ description: 'Group information', nullable: true, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGroupDto)
  group?: CreateGroupDto
}
