import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { DataSource, Repository } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';
import { Expense } from './entities/expense.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

@Injectable()
export class ExpenseService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(createExpenseDto: CreateExpenseDto, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Expense> = manager.getRepository(Expense);
      const vehicleRepo: Repository<Vehicle> = manager.getRepository(Vehicle);
      const expense = repo.create(createExpenseDto);
      expense.vehicle = await vehicleRepo.findOneBy({
        vin: createExpenseDto.vehicleVin,
      });
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.save(expense);
    });
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Expense> = manager.getRepository(Expense);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find();
    });
  }

  async findOne(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Expense> = manager.getRepository(Expense);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findOneBy({ id });
    });
  }

  async update(
    id: number,
    updateExpenseDto: UpdateExpenseDto,
    tenantId: string,
  ) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Expense> = manager.getRepository(Expense);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const expense = await repo.findOneBy({ id });
      return await repo.save({ ...expense, ...updateExpenseDto });
    });
  }

  async remove(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Expense> = manager.getRepository(Expense);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.delete(id);
    });
  }
}
