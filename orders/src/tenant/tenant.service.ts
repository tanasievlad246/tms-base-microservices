import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource, Repository } from 'typeorm';
import { Tenant } from './entities/tenant.entity';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantRepository: Repository<Tenant>,
  ) {}
  async create(createTenantDto: CreateTenantDto) {
    const tenant = this.tenantRepository.create(createTenantDto);
    await this.tenantRepository.save(tenant);
    await this.dataSource
      .createQueryRunner()
      .createSchema(tenant.subdomain, true);
    await this.dataSource.query(`SET search_path TO ${tenant.subdomain}`);
    await this.dataSource.synchronize(false);
    return tenant;
  }

  async update(id: number, updateTenantDto: UpdateTenantDto) {
    const tenant = await this.tenantRepository.findOneBy({ id });
    const updatedTenant = this.tenantRepository.merge(tenant, updateTenantDto);
    await this.tenantRepository.save(updatedTenant);
    return updatedTenant;
  }

  async findAll() {
    return this.tenantRepository.find();
  }
}
