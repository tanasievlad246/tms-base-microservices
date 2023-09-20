import { DataSource } from 'typeorm';
export declare class TenantConnectionManager {
    connections: {
        [key: string]: DataSource;
    };
    private static _instance;
    constructor();
    createConnection(tenantName: string): DataSource;
    static getInstance(): TenantConnectionManager;
    getConnection(tenantName: string): Promise<DataSource>;
    syncSchema(tenantName: string): Promise<void>;
    getConnections(): {
        [key: string]: DataSource;
    };
}
