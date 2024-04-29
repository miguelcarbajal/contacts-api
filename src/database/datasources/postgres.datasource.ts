import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'

config()

const configService = new ConfigService()

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: +configService.get('POSTGRES_PORT'),
  database: configService.get('POSTGRES_DATABASE_NAME'),
  username: configService.get('POSTGRES_USERNAME'),
  password: configService.get('POSTGRES_PASSWORD'),
  entities: ['src/**/**/*.entity.ts'],
  migrations: ['src/database/migrations/dev/*{.ts,.js}'],
})
