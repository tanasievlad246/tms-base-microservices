import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(private readonly dataSource: DataSource) {}

  async createSchema(schemaName: string) {
    try {
      await this.dataSource.createQueryRunner().createSchema(schemaName, true);
      return {
        message: `Schema ${schemaName} created`,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }

  async syncSchema(schemaName: string) {
    try {
      await this.dataSource.query(`SET search_path TO ${schemaName}`);
      await this.dataSource.synchronize(false);
      return {
        message: `Schema ${schemaName} synchronized`,
      };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }

  create(createAddressDto: CreateAddressDto) {
    return this.dataSource.getRepository(Address).create(createAddressDto);
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    console.log(updateAddressDto);
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
