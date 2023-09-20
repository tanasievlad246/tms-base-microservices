import { DataSource } from 'typeorm';
import { TenantConnectionManager } from './connectionManager';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class DatabaseService {
  constructor(
    private readonly tenantConnectionManager: TenantConnectionManager,
  ) {}
  async getDBDataSource(schemaName: string): Promise<DataSource> {
    return this.tenantConnectionManager.getConnection(schemaName);
  }

  getConnections(): { [key: string]: DataSource } {
    return this.tenantConnectionManager.getConnections();
  }
}
