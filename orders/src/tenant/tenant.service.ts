import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource, Repository } from 'typeorm';
import { Tenant } from './entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(private readonly dataSource: DataSource) {}
  async create(createTenantDto: CreateTenantDto) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const repo = manager.getRepository(Tenant);
        await this.setCurrentTenantOnRepository(
          repo,
          createTenantDto.subdomain,
        );
        const tenant = repo.create(createTenantDto);
        return await repo.save(tenant);
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async setCurrentTenantOnRepository<T>(
    repository: Repository<T>,
    tenantName: string,
  ): Promise<void> {
    console.log(tenantName);
    const r = await repository.query(
      `SET LOCAL hermestms.current_tenant='${tenantName}'`,
      [],
    );
    console.log('after set repo', r);
  }

  async findAll(tenantName: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const repo = manager.getRepository(Tenant);
        await this.setCurrentTenantOnRepository(repo, tenantName);
        const tenants = await repo.find();
        return tenants;
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
