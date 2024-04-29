import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailTypeDto } from './create-email-type.dto';

export class UpdateEmailTypeDto extends PartialType(CreateEmailTypeDto) {}
