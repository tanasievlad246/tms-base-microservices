import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { ParcelModule } from './parcel/parcel.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { FileModule } from './file/file.module';
import { ExpenseModule } from './expense/expense.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'mysqluser',
      password: process.env.DB_PASSWORD || 'password',
      database: 'default_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AddressModule,
    ParcelModule,
    OrderModule,
    UserModule,
    BusinessPartnerModule,
    VehicleModule,
    FileModule,
    ExpenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
