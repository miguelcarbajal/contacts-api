import { Module } from '@nestjs/common'
import { ContactGroupService } from './contact-group.service'
import { ContactGroupController } from './contact-group.controller'

@Module({
  controllers: [ContactGroupController],
  providers: [ContactGroupService],
})
export class ContactGroupModule {}
