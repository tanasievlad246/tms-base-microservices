import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';
export declare class AddressService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    createSchema(schemaName: string): Promise<{
        message: any;
    }>;
    syncSchema(schemaName: string): Promise<{
        message: any;
    }>;
    create(createAddressDto: CreateAddressDto): Address;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): string;
}
