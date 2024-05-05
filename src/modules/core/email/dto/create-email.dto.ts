import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID, IsString, IsOptional, IsBoolean } from 'class-validator'

export class CreateEmailDto {
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
