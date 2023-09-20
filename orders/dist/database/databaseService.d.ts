import { DataSource } from 'typeorm';
import { TenantConnectionManager } from './connectionManager';
export declare class DatabaseService {
    private readonly tenantConnectionManager;
    constructor(tenantConnectionManager: TenantConnectionManager);
    getDBDataSource(schemaName: string): Promise<DataSource>;
    getConnections(): {
        [key: string]: DataSource;
    };
}
