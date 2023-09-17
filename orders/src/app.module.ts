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

@Module({
  imports: [AddressModule, ParcelModule, OrderModule, UserModule, BusinessPartnerModule, VehicleModule, FileModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
