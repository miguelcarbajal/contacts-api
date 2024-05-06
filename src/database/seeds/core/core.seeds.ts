import { EmailType } from '../../../modules/core/email-type/entities/email-type.entity'
import { PhoneNumberType } from '../../../modules/core/phone-number-type/entities/phone-number-type.entity'

export const seedEmailTypes: Array<Omit<EmailType, 'id'>> = [{ name: 'home' }, { name: 'work' }]

export const seedPhoneNumberTypes: Array<Omit<PhoneNumberType, 'id'>> = [{ name: 'home' }, { name: 'personal' }, { name: 'work' }, { name: 'mobile' }]
