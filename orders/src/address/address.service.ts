import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = new Address();
    address.street = createAddressDto.street;
    address.number = createAddressDto.number;
    address.city = createAddressDto.city;
    address.country = createAddressDto.country;
    address.zip = createAddressDto.zip;
    address.coords = createAddressDto.coords;
    address.dock = createAddressDto.dock;
    return await this.addressRepository.save(address);
  }

  async findAll(): Promise<Address[]> {
    return await this.addressRepository.find();
  }
}
