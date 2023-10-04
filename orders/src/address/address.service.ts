import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DataSource, In, Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class AddressService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(
    createAddressDto: CreateAddressDto,
    tenantId: string,
  ): Promise<Address> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Address> = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const address = repo.create(createAddressDto);
      return await repo.save(address);
    });
  }

  async findAll(tenantId: string): Promise<Address[]> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Address> = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find();
    });
  }

  async findOne(id: number, tenantId: string): Promise<Address> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Address> = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findOne({
        where: { id },
      });
    });
  }

  async findManyByIds(ids: number[], tenantId: string): Promise<Address[]> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Address> = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findBy({
        id: In(ids),
      });
    });
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
    tenantId: string,
  ): Promise<Address> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Address> = manager.getRepository(Address);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const address = await repo.findOne({
        where: { id },
      });
      const updatedAddress = repo.merge(address, updateAddressDto);
      return await repo.save(updatedAddress);
    });
  }
}
