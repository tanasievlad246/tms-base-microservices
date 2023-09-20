import { injectable, inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { AddressService } from '../services/address';
import { Request, Response } from 'express';
import { TenantConnectionManager } from '../database/connectionManager';
import { DataSource } from 'typeorm';
import { types } from '../container';
import DataSourceBindingMiddleware from '../middleware/dataSourceBinding';

@controller('/address')
export class AddressController {
    private _addressService: AddressService;
    private _tenantConnectionManager: TenantConnectionManager;
    private _connection: DataSource;

    constructor(
        @inject(AddressService) addressService: AddressService,
        @inject(TenantConnectionManager) tenantConnectionManager: TenantConnectionManager,
        @inject(DataSource) connection: DataSource,
    ) {
        this._addressService = addressService;
        this._tenantConnectionManager = tenantConnectionManager;
        this._connection = connection;
     }

    @httpGet('/')
    public async getAddress(): Promise<string> {
        return this._addressService.getAddress();
    }

    @httpPost('/')
    public async createAddress(req: Request): Promise<string> {
        await this._connection.query(`USE ${req.body.name};`);
        await this._connection.query(`INSERT INTO address (address) VALUES ('${req.body.val}')`);
        return this._addressService.createAddress();
    }

    @httpPost('/tenant-address')
    public async getAddressCreated(req: Request): Promise<string> {
        await this._connection.query(`USE ${req.body.name};`)
        const res = await this._connection.query(`SELECT * FROM address;`);
        return res;
    }

    @httpPost('/tenant')
    public async createAndSyncTenant(req: Request): Promise<{ message: string }> {
        const { name } = req.body;
        // TODO: Move to service;
        await this._connection.query(`CREATE SCHEMA IF NOT EXISTS ${name}`);
        const connection = await this._tenantConnectionManager.getConnection(name);
        await connection.synchronize(false);
        return { message: 'Tenant created and synced!' };
    }

    @httpPost('/tenant-connection', DataSourceBindingMiddleware)
    public async tenantConnectionQuery(req: Request): Promise<any> {
        return this._addressService.tenantConnGetData();
    }
}