import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), TenantModule],
  controllers: [VehicleController],
  providers: [VehicleService, TenantService],
})
export class VehicleModule {}
