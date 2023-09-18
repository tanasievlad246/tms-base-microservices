import { injectable } from "inversify";

@injectable()
export class AddressService {
    public async getAddress(): Promise<string> {
        return 'address';
    }

    public async createAddress(): Promise<string> {
        return 'address';
    }
}