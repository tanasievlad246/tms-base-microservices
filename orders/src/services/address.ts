import { inject, injectable } from "inversify";
import { DataSource } from "typeorm";
import { types } from "../container";

@injectable()
export class AddressService {
    constructor(
        @inject(types.TenantConnection) private tenantConnection: DataSource
    ) { }
    public async getAddress(): Promise<string> {
        return 'address';
    }

    public async createAddress(): Promise<string> {
        return 'address';
    }

    public async tenantConnGetData(): Promise<any> {
        const data = await this.tenantConnection.query(`SELECT * FROM address;`);
        return data;
    }
}