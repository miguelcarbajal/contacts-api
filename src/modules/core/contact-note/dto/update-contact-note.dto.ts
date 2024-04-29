import { PartialType } from '@nestjs/mapped-types';
import { CreateContactNoteDto } from './create-contact-note.dto';

export class UpdateContactNoteDto extends PartialType(CreateContactNoteDto) {}
