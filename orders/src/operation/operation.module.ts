import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';

@Module({
  imports: [TenantModule],
  controllers: [OperationController],
  providers: [OperationService, TenantService],
})
export class OperationModule {}
