import { Module } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { ParcelController } from './parcel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcel } from './entities/parcel.entity';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Parcel]), TenantModule],
  controllers: [ParcelController],
  providers: [ParcelService, TenantService],
})
export class ParcelModule {}
