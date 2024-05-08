import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID, IsOptional, IsBoolean, IsEmail } from 'class-validator'

export class CreateEmailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  typeId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  value: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean
}
