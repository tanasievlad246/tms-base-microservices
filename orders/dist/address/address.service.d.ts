import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: Repository<Address>);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAll(): Promise<Address[]>;
}
