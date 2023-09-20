import { DataSource } from 'typeorm';
import { TenantConnectionManager } from './connectionManager';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  async getDBDataSource(schemaName: string): Promise<DataSource> {
    return TenantConnectionManager.getInstance().getConnection(schemaName);
  }
}
