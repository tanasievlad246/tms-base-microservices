import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): import("./entities/address.entity").Address;
    findAll(): string;
    createTenant(body: any): Promise<{
        message: any;
    }>;
    syncSchema(body: any): Promise<{
        message: any;
    }>;
}
