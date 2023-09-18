import { DataSource } from "typeorm";
import { injectable } from 'inversify';

@injectable()
export class TenantConnectionManager {
    connections: { [key: string]: DataSource };
    private static _instance: TenantConnectionManager;

    constructor() {
        this.connections = {};
    }

    createConnection(tenantName: string): DataSource {
        return this.connections[tenantName] = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "mysqluser",
            password: "password",
            database: tenantName,
            logging: true,
            entities: ['src/models/**/*.ts'],
        });
    }

    getInstance(): TenantConnectionManager {
        if (!TenantConnectionManager._instance) {
            TenantConnectionManager._instance = new TenantConnectionManager();
        }
        return TenantConnectionManager._instance;
    }

    getConnection(tenantName: string): Promise<DataSource> {
        if (this.connections[tenantName]) {
            return Promise.resolve(this.connections[tenantName].isInitialized ? this.connections[tenantName] : this.connections[tenantName].initialize());
        }

        return Promise.resolve(this.createConnection(tenantName).initialize());
    }
}
