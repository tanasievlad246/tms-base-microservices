import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TenantConnectionManager {
  connections: { [key: string]: DataSource };
  private static _instance: TenantConnectionManager;

  constructor() {
    this.connections = {};
  }

  createConnection(tenantName: string): DataSource {
    return (this.connections[tenantName] = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'tms2',
      schema: tenantName,
      dropSchema: false,
      logging: true,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
    }));
  }

  static getInstance(): TenantConnectionManager {
    if (!TenantConnectionManager._instance) {
      TenantConnectionManager._instance = new TenantConnectionManager();
    }
    return TenantConnectionManager._instance;
  }

  getConnection(tenantName: string): Promise<DataSource> {
    if (this.connections[tenantName]) {
      return Promise.resolve(
        this.connections[tenantName].isInitialized
          ? this.connections[tenantName]
          : this.connections[tenantName].initialize(),
      );
    }

    return Promise.resolve(this.createConnection(tenantName).initialize());
  }

  syncSchema(tenantName: string): Promise<void> {
    try {
      if (this.connections[tenantName]) {
        this.connections[tenantName].query(`SET search_path TO ${tenantName}`);
        this.connections[tenantName].synchronize(false);
        return Promise.resolve();
      }

      return Promise.reject('No tennant found');
    } catch (error) {
      return Promise.reject(error);
    }
  }

  closeConnection(tenantName: string): Promise<void> {
    try {
      if (this.connections[tenantName]) {
        this.connections[tenantName].destroy();
        delete this.connections[tenantName];
        return Promise.resolve();
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getConnections(): { [key: string]: DataSource } {
    return this.connections;
  }
}
