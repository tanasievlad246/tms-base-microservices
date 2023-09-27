import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class AddressService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(
        repo,
        createAddressDto.tenantId,
      );
      const address = repo.create(createAddressDto);
      return await repo.save(address);
    });
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find();
    });
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
