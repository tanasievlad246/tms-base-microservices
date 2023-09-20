import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysqluser',
      password: 'password',
      database: 'default_db',
      synchronize: true,
      logging: true,
      entities: ['src/**/*.ts'],
    }),
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
