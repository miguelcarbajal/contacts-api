import { Test, TestingModule } from '@nestjs/testing'
import { ContactService } from './contact.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { DeepPartial, Repository } from 'typeorm'
import { Contact } from './entities/contact.entity'
import { CompanyContact } from '../company-contact/entities/company-contact.entity'
import { Company } from '../company/entities/company.entity'
import { ContactExpiration } from '../contact-expiration/entities/contact-expiration.entity'
import { ContactGroup } from '../contact-group/entities/contact-group.entity'
import { ContactNote } from '../contact-note/entities/contact-note.entity'
import { EmailType } from '../email-type/entities/email-type.entity'
import { Email } from '../email/entities/email.entity'
import { Group } from '../group/entities/group.entity'
import { Person } from '../person/entities/person.entity'
import { PhoneNumberType } from '../phone-number-type/entities/phone-number-type.entity'
import { PhoneNumber } from '../phone-number/entities/phone-number.entity'
import { CreateContactDto } from './dto/create-contact.dto'

describe('ContactService', () => {
  let service: ContactService
  const mockContactRepository: Partial<Record<keyof Repository<Contact>, jest.Mock>> = { find: jest.fn(), save: jest.fn() }
  const mockPersonRepository: Partial<Record<keyof Repository<Person>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<Person>) => {
      const person = new Person()
      person.firstName = entityLike.firstName
      person.lastName = entityLike.lastName
      return person
    }),
    save: jest.fn().mockImplementation((person: Person) => person),
  }
  const mockCompanyRepository: Partial<Record<keyof Repository<Company>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<Company>) => {
      const company = new Company()
      company.name = entityLike.name
      return company
    }),
    save: jest.fn().mockImplementation((company: Company) => company),
    findOne: jest.fn().mockImplementation(() => {
      const company = new Company()
      company.name = 'FindOneCompany'
      return company
    }),
  }
  const mockGroupRepository: Partial<Record<keyof Repository<Group>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<Group>) => {
      const group = new Group()
      group.name = entityLike.name
      return group
    }),
    save: jest.fn().mockImplementation((group: Group) => group),
    findOne: jest.fn().mockImplementation(() => {
      const group = new Group()
      group.name = 'FindOneGroup'
      return group
    }),
  }
  const mockPhoneNumberRepository: Partial<Record<keyof Repository<PhoneNumber>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<PhoneNumber>) => {
      const phoneNumber = new PhoneNumber()
      phoneNumber.value = entityLike.value
      phoneNumber.isPrimary = entityLike.isPrimary
      return phoneNumber
    }),
  }
  const mockPhoneNumberTypeRepository: Partial<Record<keyof Repository<PhoneNumberType>, jest.Mock>> = {
    create: jest.fn().mockImplementation(() => {
      const phoneNumberType = new PhoneNumberType()
      phoneNumberType.name = 'CreatedPhoneNumberType'
      return phoneNumberType
    }),
  }
  const mockEmailRepository: Partial<Record<keyof Repository<Email>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<Email>) => {
      const email = new Email()
      email.value = entityLike.value
      email.isPrimary = entityLike.isPrimary
      return email
    }),
  }
  const mockEmailTypeRepository: Partial<Record<keyof Repository<EmailType>, jest.Mock>> = {
    create: jest.fn().mockImplementation(() => {
      const emailType = new EmailType()
      emailType.name = 'CreatedEmailType'
      return emailType
    }),
  }
  const mockCompanyContactRepository: Partial<Record<keyof Repository<CompanyContact>, jest.Mock>> = {
    create: jest.fn().mockImplementation(() => new CompanyContact()),
  }
  const mockContactNoteRepository: Partial<Record<keyof Repository<ContactNote>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<ContactNote>) => {
      const contactNote = new ContactNote()
      contactNote.value = entityLike.value
      return contactNote
    }),
  }
  const mockContactExpirationRepository: Partial<Record<keyof Repository<ContactExpiration>, jest.Mock>> = {
    create: jest.fn().mockImplementation((entityLike: DeepPartial<ContactExpiration>) => {
      const contactExpiration = new ContactExpiration()
      contactExpiration.expiresAt = entityLike.expiresAt as Date
      return contactExpiration
    }),
  }
  const mockContactGroupRepository: Partial<Record<keyof Repository<ContactGroup>, jest.Mock>> = {
    create: jest.fn().mockImplementation(() => new ContactGroup()),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
        { provide: getRepositoryToken(CompanyContact), useValue: mockCompanyContactRepository },
        { provide: getRepositoryToken(ContactNote), useValue: mockContactNoteRepository },
        { provide: getRepositoryToken(ContactExpiration), useValue: mockContactExpirationRepository },
        { provide: getRepositoryToken(ContactGroup), useValue: mockContactGroupRepository },
      ],
    }).compile()

    service = module.get<ContactService>(ContactService)
  })

  describe('create()', () => {
    it('should create a complete contact with all available properties, new company and group', async () => {
      const createContactDto: CreateContactDto = {
        person: { firstName: 'Miguel', lastName: 'Carbajal' },
        company: { name: 'Globant' },
        phoneNumbers: [{ typeId: 'test', value: '4839204389', isPrimary: true }],
        emails: [{ typeId: 'test', value: 'miguel.carbajal@globant.com', isPrimary: true }],
        expiration: new Date(),
        note: 'Note text content',
        group: { name: 'Work' },
      }
      mockContactRepository.save.mockImplementation((contact: Contact) => {
        expect(contact.person.firstName).toBe(createContactDto.person.firstName)
        expect(contact.person.lastName).toBe(createContactDto.person.lastName)

        expect(contact.companyContact.company.name).toBe(createContactDto.company.name)

        expect(contact.phoneNumbers[0].value).toBe(createContactDto.phoneNumbers[0].value)
        expect(contact.phoneNumbers[0].isPrimary).toBe(createContactDto.phoneNumbers[0].isPrimary)

        expect(contact.emails[0].value).toBe(createContactDto.emails[0].value)
        expect(contact.emails[0].isPrimary).toBe(createContactDto.emails[0].isPrimary)

        expect(contact.expiration.expiresAt).toBe(createContactDto.expiration)

        expect(contact.note.value).toBe(createContactDto.note)

        expect(contact.contactGroup.group.name).toBe(createContactDto.group.name)

        return { id: 'uuid', ...contact }
      })

      const result = await service.create(createContactDto)

      expect(mockContactRepository.save).toHaveBeenCalledWith(expect.any(Contact))
      expect(result.id).toBe('uuid')
    })

    it('should create a complete contact with all available properties, existing company and group', async () => {
      const createContactDto: CreateContactDto = {
        person: { firstName: 'Miguel', lastName: 'Carbajal' },
        companyId: 'companyId',
        phoneNumbers: [{ typeId: 'test', value: '4839204389', isPrimary: true }],
        emails: [{ typeId: 'test', value: 'miguel.carbajal@globant.com', isPrimary: true }],
        expiration: new Date(),
        note: 'Note text content',
        groupId: 'groupId',
      }
      mockContactRepository.save.mockImplementation((contact: Contact) => {
        expect(contact.person.firstName).toBe(createContactDto.person.firstName)
        expect(contact.person.lastName).toBe(createContactDto.person.lastName)

        expect(contact.companyContact.company.name).toBe('FindOneCompany')

        expect(contact.phoneNumbers[0].value).toBe(createContactDto.phoneNumbers[0].value)
        expect(contact.phoneNumbers[0].isPrimary).toBe(createContactDto.phoneNumbers[0].isPrimary)

        expect(contact.emails[0].value).toBe(createContactDto.emails[0].value)
        expect(contact.emails[0].isPrimary).toBe(createContactDto.emails[0].isPrimary)

        expect(contact.expiration.expiresAt).toBe(createContactDto.expiration)

        expect(contact.note.value).toBe(createContactDto.note)

        expect(contact.contactGroup.group.name).toBe('FindOneGroup')

        return { id: 'uuid', ...contact }
      })

      const result = await service.create(createContactDto)

      expect(mockContactRepository.save).toHaveBeenCalledWith(expect.any(Contact))
      expect(result.id).toBe('uuid')
    })

    it('should create a complete contact with all available properties and no primary email and phone number specified', async () => {
      const createContactDto: CreateContactDto = {
        person: { firstName: 'Miguel', lastName: 'Carbajal' },
        company: { name: 'Globant' },
        phoneNumbers: [{ typeId: 'test', value: '4839204389' }],
        emails: [{ typeId: 'test', value: 'miguel.carbajal@globant.com' }],
        expiration: new Date(),
        note: 'Note text content',
        group: { name: 'Work' },
      }
      mockContactRepository.save.mockImplementation((contact: Contact) => {
        expect(contact.person.firstName).toBe(createContactDto.person.firstName)
        expect(contact.person.lastName).toBe(createContactDto.person.lastName)

        expect(contact.companyContact.company.name).toBe(createContactDto.company.name)

        expect(contact.phoneNumbers[0].value).toBe(createContactDto.phoneNumbers[0].value)
        expect(contact.phoneNumbers[0].isPrimary).toBe(true)

        expect(contact.emails[0].value).toBe(createContactDto.emails[0].value)
        expect(contact.emails[0].isPrimary).toBe(true)

        expect(contact.expiration.expiresAt).toBe(createContactDto.expiration)

        expect(contact.note.value).toBe(createContactDto.note)

        expect(contact.contactGroup.group.name).toBe(createContactDto.group.name)

        return { id: 'uuid', ...contact }
      })

      const result = await service.create(createContactDto)

      expect(mockContactRepository.save).toHaveBeenCalledWith(expect.any(Contact))
      expect(result.id).toBe('uuid')
    })

    it('should reject the contact creation when no owner data is passed', async () => {
      const createContactDto: CreateContactDto = {
        phoneNumbers: [{ typeId: 'test', value: '4839204389', isPrimary: true }],
        emails: [{ typeId: 'test', value: 'miguel.carbajal@globant.com', isPrimary: true }],
        expiration: new Date(),
        note: 'Note text content',
      }

      try {
        await service.create(createContactDto)
      } catch (exception) {
        expect(exception.status).toBe(400)
        expect(exception.response.message).toBe('Invalid owner')
        expect(exception.response.error).toBe('Bad Request')
        expect(exception.response.statusCode).toBe(400)
      }
    })
  })

  describe('findAll()', () => {
    it('should return an array of contacts', async () => {
      const contacts = [{}, {}] as Array<Contact>
      mockContactRepository.find.mockImplementation(async () => Promise.resolve(contacts))

      const result = await service.findAll()

      expect(result).toBe(contacts)
    })
  })
})
