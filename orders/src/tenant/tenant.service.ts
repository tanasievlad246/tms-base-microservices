import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource, Repository } from 'typeorm';
import { Tenant } from './entities/tenant.entity';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
    private readonly dataSource: DataSource,
  ) {}
  async create(createTenantDto: CreateTenantDto) {
    try {
      const tenant = await this.createTenant(createTenantDto);
      return tenant;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  private async createTenant(createTenantDto: CreateTenantDto) {
    const tenant = this.tenantRepository.create(createTenantDto);
    return await this.tenantRepository.save(tenant);
  }

  async update(id: number, updateTenantDto: UpdateTenantDto) {
    const tenant = await this.tenantRepository.findOneBy({ id });
    const updatedTenant = this.tenantRepository.merge(tenant, updateTenantDto);
    await this.tenantRepository.save(updatedTenant);
    return updatedTenant;
  }

  async setCurrentTenantOnRepository<T>(
    repository: Repository<T>,
    tenantName: string,
  ): Promise<void> {
    console.log(tenantName);
    const r = await repository.query(
      `SET LOCAL postgres.current_tenant='${tenantName}'`,
      [],
    );
    console.log('after set repo', r);
  }

  async findAll(tenantName: string) {
    this.dataSource.query(
      `SET LOCAL postgres.current_tenant = '${tenantName}'`,
    );
    const tenantsRepo = this.dataSource.getRepository(Tenant);
    return tenantsRepo.find();
  }
}
