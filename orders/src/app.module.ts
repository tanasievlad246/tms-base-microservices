import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ExpenseModule } from './expense/expense.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ParcelModule } from './parcel/parcel.module';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { TenantOrigin } from './middleware/tenantOrigin';
import { JwtModule } from '@nestjs/jwt';
import { OperationModule } from './operation/operation.module';

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
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    AddressModule,
    TenantModule,
    VehicleModule,
    ExpenseModule,
    OrderModule,
    UserModule,
    ParcelModule,
    BusinessPartnerModule,
    OperationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantOrigin).forRoutes('*');
  }
}
