import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';
import { TenantModule } from 'src/tenant/tenant.module';
import { ExpenseModule } from 'src/expense/expense.module';
import { TenantService } from 'src/tenant/tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { testConfig } from '../../typeOrm.config';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleService, TenantService],
      imports: [
        TenantModule,
        ExpenseModule,
        TypeOrmModule.forFeature([Vehicle]),
        TypeOrmModule.forRoot(testConfig),
      ],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it creates a vehicle', async () => {
    const createVehicleDto: CreateVehicleDto = {
      vin: '123abc',
      make: 'Ford',
      model: 'F150',
      year: new Date(),
      km: 0,
      color: 'red',
      registration: '123abc',
      registrationDate: new Date(),
      country: 'Canada',
      type: 'truck',
    };

    const createdVehicle: Vehicle = await service.create(createVehicleDto, '1');

    expect(createdVehicle).toBeDefined();
    expect(createdVehicle.vin).toEqual(createVehicleDto.vin);
    expect(createdVehicle.make).toEqual(createVehicleDto.make);
    expect(createdVehicle.model).toEqual(createVehicleDto.model);
    expect(createdVehicle.year).toEqual(createVehicleDto.year);
    expect(createdVehicle.km).toEqual(createVehicleDto.km);
    expect(createdVehicle.color).toEqual(createVehicleDto.color);
    expect(createdVehicle.registration).toEqual(createVehicleDto.registration);
    expect(createdVehicle.registrationDate).toEqual(
      createVehicleDto.registrationDate,
    );
    expect(createdVehicle.country).toEqual(createVehicleDto.country);
    expect(createdVehicle.type).toEqual(createVehicleDto.type);
  });

  it.todo('it assigns a trailer to a vehicle');

  it.todo('it finds all vehicles for a tenant');

  it.todo('it finds multiple vehicles by ids for a tenant');

  it.todo('it finds one vehicle by id for a tenant');

  it.todo(
    'it updates a vehicle by id for a tenant and returns the updated vehicle',
  );

  it.todo('removes a vehicle by id for a tenant');
});
