import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      logging: true,
      entities: ['dist/**/*.entity.{ts,js}'],
    }),
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
