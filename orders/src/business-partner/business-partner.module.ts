import { Module } from '@nestjs/common';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartnerController } from './business-partner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessPartner } from './entities/business-partner.entity';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessPartner]), TenantModule],
  controllers: [BusinessPartnerController],
  providers: [BusinessPartnerService, TenantService],
})
export class BusinessPartnerModule {}
