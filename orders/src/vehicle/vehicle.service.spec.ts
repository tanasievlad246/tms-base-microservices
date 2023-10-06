import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';
import { TenantModule } from 'src/tenant/tenant.module';
import { ExpenseModule } from 'src/expense/expense.module';
import { TenantService } from 'src/tenant/tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { databaseConnectionFactory } from 'src/test-utils';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(async () => {
    const dbConfig = await databaseConnectionFactory();
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleService, TenantService],
      imports: [
        TenantModule,
        ExpenseModule,
        TypeOrmModule.forFeature([Vehicle]),
        TypeOrmModule.forRoot(dbConfig),
      ],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.todo('it should check that the database is connected');
});
