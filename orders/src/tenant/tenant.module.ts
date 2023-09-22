import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { DatabaseService } from 'src/database/databaseService';
import { TenantConnectionManager } from 'src/database/connectionManager';

@Module({
  imports: [TypeOrmModule.forFeature([Tenant])],
  controllers: [TenantController],
  providers: [TenantService, DatabaseService, TenantConnectionManager],
})
export class TenantModule {}
