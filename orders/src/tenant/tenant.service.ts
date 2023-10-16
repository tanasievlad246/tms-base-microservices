import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { Tenant } from './entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(private readonly dataSource: DataSource) {}
  async create(createTenantDto: CreateTenantDto) {
    try {
      const ForbiddenTenantNames = [
        'public',
        'hermestms',
        'tenant1',
        'tenant2',
      ];
      if (ForbiddenTenantNames.includes(createTenantDto.subdomain)) {
        throw new Error(
          'This tenant name is not allowed. Please try another one.',
        );
      }

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

  async setCurrentTenantOnQueryRunner(
    queryRunner: QueryRunner,
    tenantName: string,
  ): Promise<void> {
    console.log(tenantName);
    const r = await queryRunner.query(
      `SET LOCAL hermestms.current_tenant='${tenantName}'`,
      [],
    );
    console.log('after set query runner', r);
  }

  async findOne(tenantId: string) {
    try {
      return this.dataSource.transaction(async (manager) => {
        const repo = manager.getRepository(Tenant);
        await this.setCurrentTenantOnRepository(repo, tenantId);
        const tenant = await repo.findOneBy({ subdomain: tenantId });
        return tenant;
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
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
