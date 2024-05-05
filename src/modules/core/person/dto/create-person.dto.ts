import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreatePersonDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  middleName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nickName?: string
}
