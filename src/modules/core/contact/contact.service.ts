import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact } from './entities/contact.entity'
import { Repository } from 'typeorm'
import { Person } from '../person/entities/person.entity'
import { Company } from '../company/entities/company.entity'
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
    if (!createContactDto.person && !createContactDto.companyId && !createContactDto.company) {
      throw new BadRequestException('Invalid owner')
    }

    if (!createContactDto.phoneNumbers && !createContactDto.emails) {
      throw new BadRequestException('No locators found')
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

    if (!createContactDto.groupId && createContactDto.group) {
      const contactGroupInstance = this.contactGroupRepository.create()

      const existingGroup = await this.groupRepository.findOneBy({ name: createContactDto.group.name })
      if (existingGroup) {
        contactGroupInstance.group = existingGroup
      } else {
        const groupInstance = this.groupRepository.create(createContactDto.group)
        const group = await this.groupRepository.save({ ...groupInstance, name: groupInstance.name.toLocaleUpperCase().trim() })

        contactGroupInstance.group = group
      }

      contactInstance.contactGroup = contactGroupInstance
    }

    if (createContactDto.person) {
      const personInstance = this.personRepository.create(createContactDto.person)
      contactInstance.person = personInstance
    }

    if (createContactDto.companyId) {
      const company = await this.companyRepository.findOne({ where: { id: createContactDto.companyId } })

      const companyContactInstance = this.companyContactRepository.create()
      companyContactInstance.company = company

      contactInstance.companyContact = companyContactInstance
    }

    if (!createContactDto.companyId && createContactDto.company) {
      const companyContactInstance = this.companyContactRepository.create()

      const existingCompany = await this.companyRepository.findOneBy({ name: createContactDto.company.name })
      if (existingCompany) {
        companyContactInstance.company = existingCompany
      } else {
        const companyIntance = this.companyRepository.create(createContactDto.company)
        const company = await this.companyRepository.save({ ...companyIntance, name: companyIntance.name.toLocaleUpperCase().trim() })

        companyContactInstance.company = company
      }

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
        person: true,
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

  async remove(id: string) {
    return await this.contactRepository.delete(id)
  }
}
