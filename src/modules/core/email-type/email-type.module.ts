import { Module } from '@nestjs/common'
import { EmailTypeService } from './email-type.service'
import { EmailTypeController } from './email-type.controller'
import { EmailType } from './entities/email-type.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([EmailType])],
  controllers: [EmailTypeController],
  providers: [EmailTypeService],
})
export class EmailTypeModule {}
