import { Test, TestingModule } from '@nestjs/testing';
import { ContactNoteController } from './contact-note.controller';
import { ContactNoteService } from './contact-note.service';

describe('ContactNoteController', () => {
  let controller: ContactNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactNoteController],
      providers: [ContactNoteService],
    }).compile();

    controller = module.get<ContactNoteController>(ContactNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
