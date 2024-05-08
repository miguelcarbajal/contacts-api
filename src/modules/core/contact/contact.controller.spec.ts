import { Test, TestingModule } from '@nestjs/testing'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CompanyContact } from '../company-contact/entities/company-contact.entity'
import { Company } from '../company/entities/company.entity'
import { ContactExpiration } from '../contact-expiration/entities/contact-expiration.entity'
import { ContactGroup } from '../contact-group/entities/contact-group.entity'
import { ContactNote } from '../contact-note/entities/contact-note.entity'
import { EmailType } from '../email-type/entities/email-type.entity'
import { Email } from '../email/entities/email.entity'
import { Group } from '../group/entities/group.entity'
import { PersonContact } from '../person-contact/entities/person-contact.entity'
import { Person } from '../person/entities/person.entity'
import { PhoneNumberType } from '../phone-number-type/entities/phone-number-type.entity'
import { PhoneNumber } from '../phone-number/entities/phone-number.entity'
import { Contact } from './entities/contact.entity'

describe('ContactController', () => {
  let controller: ContactController
  let service: ContactService
  const mockContactRepository: Partial<Record<keyof Repository<Contact>, jest.Mock>> = {}
  const mockPersonRepository: Partial<Record<keyof Repository<Person>, jest.Mock>> = {}
  const mockCompanyRepository: Partial<Record<keyof Repository<Company>, jest.Mock>> = {}
  const mockGroupRepository: Partial<Record<keyof Repository<Group>, jest.Mock>> = {}
  const mockPhoneNumberRepository: Partial<Record<keyof Repository<PhoneNumber>, jest.Mock>> = {}
  const mockPhoneNumberTypeRepository: Partial<Record<keyof Repository<PhoneNumberType>, jest.Mock>> = {}
  const mockEmailRepository: Partial<Record<keyof Repository<Email>, jest.Mock>> = {}
  const mockEmailTypeRepository: Partial<Record<keyof Repository<EmailType>, jest.Mock>> = {}
  const mockPersonContactRepository: Partial<Record<keyof Repository<PersonContact>, jest.Mock>> = {}
  const mockCompanyContactRepository: Partial<Record<keyof Repository<CompanyContact>, jest.Mock>> = {}
  const mockContactNoteRepository: Partial<Record<keyof Repository<ContactNote>, jest.Mock>> = {}
  const mockContactExpirationRepository: Partial<Record<keyof Repository<ContactExpiration>, jest.Mock>> = {}
  const mockContactGroupRepository: Partial<Record<keyof Repository<ContactGroup>, jest.Mock>> = {}

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        ContactService,
        { provide: getRepositoryToken(Contact), useValue: mockContactRepository },
        { provide: getRepositoryToken(Person), useValue: mockPersonRepository },
        { provide: getRepositoryToken(Company), useValue: mockCompanyRepository },
        { provide: getRepositoryToken(Group), useValue: mockGroupRepository },
        { provide: getRepositoryToken(PhoneNumber), useValue: mockPhoneNumberRepository },
        { provide: getRepositoryToken(PhoneNumberType), useValue: mockPhoneNumberTypeRepository },
        { provide: getRepositoryToken(Email), useValue: mockEmailRepository },
        { provide: getRepositoryToken(EmailType), useValue: mockEmailTypeRepository },
        { provide: getRepositoryToken(PersonContact), useValue: mockPersonContactRepository },
        { provide: getRepositoryToken(CompanyContact), useValue: mockCompanyContactRepository },
        { provide: getRepositoryToken(ContactNote), useValue: mockContactNoteRepository },
        { provide: getRepositoryToken(ContactExpiration), useValue: mockContactExpirationRepository },
        { provide: getRepositoryToken(ContactGroup), useValue: mockContactGroupRepository },
      ],
    }).compile()

    controller = module.get<ContactController>(ContactController)
    service = module.get<ContactService>(ContactService)
  })

  describe('findAll()', () => {
    it('should get all contacts', async () => {
      const serviceResult: Array<Contact> = [{}, {}, {}] as Array<Contact>
      jest.spyOn(service, 'findAll').mockImplementation(async () => serviceResult)

      const result = await controller.findAll()

      expect(result).toBe(serviceResult)
    })
  })
})
