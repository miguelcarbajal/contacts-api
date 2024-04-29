import { Module } from '@nestjs/common';
import { ContactExpirationService } from './contact-expiration.service';
import { ContactExpirationController } from './contact-expiration.controller';

@Module({
  controllers: [ContactExpirationController],
  providers: [ContactExpirationService],
})
export class ContactExpirationModule {}
