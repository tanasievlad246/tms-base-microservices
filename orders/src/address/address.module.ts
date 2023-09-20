import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { DatabaseService } from 'src/database/databaseService';
import { TenantConnectionManager } from 'src/database/connectionManager';

@Module({
  controllers: [AddressController],
  providers: [AddressService, DatabaseService, TenantConnectionManager],
})
export class AddressModule {}
