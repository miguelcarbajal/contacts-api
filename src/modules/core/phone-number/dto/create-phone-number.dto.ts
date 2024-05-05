import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreatePhoneNumberDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  typeId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPrimary: boolean
}
