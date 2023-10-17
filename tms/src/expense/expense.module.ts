import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { TenantModule } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense]), TenantModule],
  controllers: [ExpenseController],
  providers: [ExpenseService, TenantService],
})
export class ExpenseModule {}
