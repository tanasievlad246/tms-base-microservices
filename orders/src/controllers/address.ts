import { injectable, inject } from 'inversify';
import { AddressService } from '../services/address';

@injectable()
export class AddressController {
    constructor(@inject('AddressService') private addressService: AddressService) { }

    public async getAddress(): Promise<string> {
        return this.addressService.getAddress();
    }

    public async createAddress(): Promise<string> {
        return this.addressService.createAddress();
    }
}