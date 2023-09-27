import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ExpenseModule } from './expense/expense.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ParcelModule } from './parcel/parcel.module';
import { BusinessPartnerModule } from './business-partner/business-partner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'hermestms',
      password: 'hermestmspw',
      database: 'tms2',
      logging: true,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
    }),
    AddressModule,
    TenantModule,
    VehicleModule,
    ExpenseModule,
    OrderModule,
    UserModule,
    ParcelModule,
    BusinessPartnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
  // configure(consumer: MiddlewareConsumer) {}
}
