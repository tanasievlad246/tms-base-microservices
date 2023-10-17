import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';
import { BusinessPartnerModule } from 'src/business-partner/business-partner.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { OperationModule } from 'src/operation/operation.module';
import { BusinessPartnerService } from 'src/business-partner/business-partner.service';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { OperationService } from 'src/operation/operation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    TenantModule,
    BusinessPartnerModule,
    VehicleModule,
    OperationModule,
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    TenantService,
    BusinessPartnerService,
    VehicleService,
    OperationService,
  ],
})
export class OrderModule {}
