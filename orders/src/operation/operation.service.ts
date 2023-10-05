import { Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { DataSource, In, Repository } from 'typeorm';
import { Operation } from './entities/operation.entity';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class OperationService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(
    createOperationDto: CreateOperationDto,
    tenantId: string,
  ): Promise<Operation> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Operation> = manager.getRepository(Operation);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const operation: Operation = repo.create(createOperationDto);
      return await repo.save(operation);
    });
  }

  async findAll(tenantId: string): Promise<Operation[]> {
    return await this.dataSource.transaction(async (manager) => {
      const operationRepo: Repository<Operation> =
        manager.getRepository(Operation);
      await this.tenantService.setCurrentTenantOnRepository(
        operationRepo,
        tenantId,
      );

      return await operationRepo.find();
    });
  }

  async findOne(id: number, tenantId: string): Promise<Operation> {
    return await this.dataSource.transaction(async (manager) => {
      const operationRepo: Repository<Operation> =
        manager.getRepository(Operation);
      await this.tenantService.setCurrentTenantOnRepository(
        operationRepo,
        tenantId,
      );

      return await operationRepo.findOneBy({ id });
    });
  }

  async update(
    id: number,
    updateOperationDto: UpdateOperationDto,
  ): Promise<Operation> {
    return await this.dataSource.transaction(async (manager) => {
      const operationRepo: Repository<Operation> =
        manager.getRepository(Operation);
      const operation: Operation = await operationRepo.findOneBy({ id });
      operationRepo.merge(operation, updateOperationDto);
      return await operationRepo.save(operation);
    });
  }

  async findManyByIds(ids: number[], tenantId: string): Promise<Operation[]> {
    return await this.dataSource.transaction(async (manager) => {
      const operationRepo: Repository<Operation> =
        manager.getRepository(Operation);
      await this.tenantService.setCurrentTenantOnRepository(
        operationRepo,
        tenantId,
      );

      return await operationRepo.findBy({
        id: In(ids),
      });
    });
  }
}
