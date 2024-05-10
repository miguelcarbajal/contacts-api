import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact } from './entities/contact.entity'
import { Repository } from 'typeorm'
import { Person } from '../person/entities/person.entity'
import { Company } from '../company/entities/company.entity'
import { PersonContact } from '../person-contact/entities/person-contact.entity'
import { CompanyContact } from '../company-contact/entities/company-contact.entity'
import { ContactNote } from '../contact-note/entities/contact-note.entity'
import { ContactExpiration } from '../contact-expiration/entities/contact-expiration.entity'
import { ContactGroup } from '../contact-group/entities/contact-group.entity'
import { Group } from '../group/entities/group.entity'
import { PhoneNumber } from '../phone-number/entities/phone-number.entity'
import { Email } from '../email/entities/email.entity'
import { PhoneNumberType } from '../phone-number-type/entities/phone-number-type.entity'
import { EmailType } from '../email-type/entities/email-type.entity'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @InjectRepository(PhoneNumber)
    private readonly phoneNumberRepository: Repository<PhoneNumber>,
    @InjectRepository(PhoneNumberType)
    private readonly phoneNumberTypeRepository: Repository<PhoneNumberType>,
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
    @InjectRepository(EmailType)
    private readonly emailTypeRepository: Repository<EmailType>,
    @InjectRepository(PersonContact)
    private readonly personContactRepository: Repository<PersonContact>,
    @InjectRepository(CompanyContact)
    private readonly companyContactRepository: Repository<CompanyContact>,
    @InjectRepository(ContactNote)
    private readonly contactNoteRepository: Repository<ContactNote>,
    @InjectRepository(ContactExpiration)
    private readonly contactExpirationRepository: Repository<ContactExpiration>,
    @InjectRepository(ContactGroup)
    private readonly contactGroupRepository: Repository<ContactGroup>
  ) {}

  async create(createContactDto: CreateContactDto) {
    let person: Person | undefined
    let company: Company | undefined

    if (!createContactDto.person && !createContactDto.companyId && !createContactDto.company) {
      throw new BadRequestException('Invalid owner')
    }

    const contactInstance = new Contact()

    if (createContactDto.note) {
      const noteInstance = this.contactNoteRepository.create({ value: createContactDto.note })
      contactInstance.note = noteInstance
    }

    if (createContactDto.expiration) {
      const contactExpirationInstance = this.contactExpirationRepository.create({ expiresAt: createContactDto.expiration })
      contactInstance.expiration = contactExpirationInstance
    }

    if (createContactDto.groupId) {
      const group = await this.groupRepository.findOne({ where: { id: createContactDto.groupId } })

      const contactGroupInstance = this.contactGroupRepository.create()
      contactGroupInstance.group = group
      contactInstance.contactGroup = contactGroupInstance
    }

    if (createContactDto.group) {
      const groupInstance = this.groupRepository.create(createContactDto.group)
      const group = await this.groupRepository.save(groupInstance)

      const contactGroupInstance = this.contactGroupRepository.create()
      contactGroupInstance.group = group
      contactInstance.contactGroup = contactGroupInstance
    }

    if (createContactDto.person) {
      const personInstance = this.personRepository.create(createContactDto.person)
      person = await this.personRepository.save(personInstance)

      const personContactInstance = this.personContactRepository.create()
      personContactInstance.person = person

      contactInstance.personContact = personContactInstance
    }

    if (createContactDto.companyId) {
      company = await this.companyRepository.findOne({ where: { id: createContactDto.companyId } })

      const companyContactInstance = this.companyContactRepository.create()
      companyContactInstance.company = company

      contactInstance.companyContact = companyContactInstance
    }

    if (!createContactDto.companyId && createContactDto.company) {
      const companyIntance = this.companyRepository.create(createContactDto.company)
      company = await this.companyRepository.save(companyIntance)

      const companyContactInstance = this.companyContactRepository.create()
      companyContactInstance.company = company

      contactInstance.companyContact = companyContactInstance
    }

    if (Array.isArray(createContactDto.phoneNumbers) && createContactDto.phoneNumbers.length > 0) {
      const alreadyPrimarySelected = createContactDto.phoneNumbers.some((phoneNumber) => phoneNumber.isPrimary)

      // TODO: enhance phone number type logic, cache if possible with Redis
      const phoneNumberInstances = createContactDto.phoneNumbers.map((phoneNumber, index) => {
        const phoneNumberType = this.phoneNumberTypeRepository.create({ id: phoneNumber.typeId })

        const phoneNumberInstance = this.phoneNumberRepository.create(phoneNumber)
        phoneNumberInstance.type = phoneNumberType

        if (!alreadyPrimarySelected) {
          phoneNumberInstance.isPrimary = index === 0 ? true : false
        }

        return phoneNumberInstance
      })

      contactInstance.phoneNumbers = phoneNumberInstances
    }

    if (Array.isArray(createContactDto.emails) && createContactDto.emails.length > 0) {
      const alreadyPrimarySelected = createContactDto.emails.some((email) => email.isPrimary)

      // TODO: enhance email type logic, cache if possible with Redis
      const emailInstances = createContactDto.emails.map((email, index) => {
        const emailType = this.emailTypeRepository.create({ id: email.typeId })

        const emailInstance = this.emailRepository.create(email)
        emailInstance.type = emailType

        if (!alreadyPrimarySelected) {
          emailInstance.isPrimary = index === 0 ? true : false
        }

        return emailInstance
      })

      contactInstance.emails = emailInstances
    }

    return await this.contactRepository.save(contactInstance)
  }

  async findAll() {
    return await this.contactRepository.find({
      relations: {
        personContact: { person: true },
        companyContact: { company: true },
        contactGroup: { group: true },
        expiration: true,
        note: true,
        emails: true,
        phoneNumbers: true,
      },
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`
  }

  remove(id: number) {
    return `This action removes a #${id} contact`
  }
}
