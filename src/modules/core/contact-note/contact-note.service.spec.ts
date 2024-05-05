import { Test, TestingModule } from '@nestjs/testing'
import { ContactNoteService } from './contact-note.service'

describe('ContactNoteService', () => {
  let service: ContactNoteService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactNoteService],
    }).compile()

    service = module.get<ContactNoteService>(ContactNoteService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
