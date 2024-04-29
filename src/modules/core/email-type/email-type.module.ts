import { Module } from '@nestjs/common';
import { EmailTypeService } from './email-type.service';
import { EmailTypeController } from './email-type.controller';

@Module({
  controllers: [EmailTypeController],
  providers: [EmailTypeService],
})
export class EmailTypeModule {}
