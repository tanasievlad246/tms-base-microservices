import { injectable, inject } from 'inversify';
import { AddressService } from '../services/address';

@injectable()
export class AddressController {
    private _addressService: AddressService;

    constructor(@inject(AddressService) addressService: AddressService) {
        this._addressService = addressService;
     }

    public async getAddress(): Promise<string> {
        return this._addressService.getAddress();
    }

    public async createAddress(): Promise<string> {
        return this._addressService.createAddress();
    }
}