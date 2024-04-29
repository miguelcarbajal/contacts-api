import { Module } from '@nestjs/common';
import { ContactNoteService } from './contact-note.service';
import { ContactNoteController } from './contact-note.controller';

@Module({
  controllers: [ContactNoteController],
  providers: [ContactNoteService],
})
export class ContactNoteModule {}
