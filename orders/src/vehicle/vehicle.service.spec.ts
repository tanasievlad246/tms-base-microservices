import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';
import { TenantModule } from 'src/tenant/tenant.module';
import { ExpenseModule } from 'src/expense/expense.module';
import { TenantService } from 'src/tenant/tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { testConfig } from '../../typeOrm.config';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { In } from 'typeorm';

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

    // drop all rows from vehicle table before each test
    // await service.dataSource.query('DELETE FROM vehicle;');
    await service.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(Vehicle);
      service.tenantService.setCurrentTenantOnRepository(repo, '1');
      await repo.delete({
        vin: In(['123abc', '123cde']),
      });
    });

    await service.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(Vehicle);
      service.tenantService.setCurrentTenantOnRepository(repo, '2');
      await repo.delete({
        vin: In(['123abc', '123cde']),
      });
    });
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

  it('it assigns a trailer to a vehicle', async () => {
    const trailerDto: CreateVehicleDto = {
      vin: '123abc',
      make: 'Cargobull',
      model: '355',
      year: new Date(),
      km: 0,
      color: 'white',
      registration: '123abc',
      registrationDate: new Date(),
      country: 'Canada',
      type: 'trailer',
    };

    const truckDto: CreateVehicleDto = {
      vin: '123cde',
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

    const trailer: Vehicle = await service.create(trailerDto, '1');
    const truck: Vehicle = await service.create(truckDto, '1');

    const updatedTruck: Vehicle = await service.assignTrailerToVehicle(
      truck.vin,
      trailer.vin,
      '1',
    );

    console.log(trailer.vin);
    console.log(truck.vin);

    expect(updatedTruck.trailer).toBeDefined();
    expect(updatedTruck.trailer.vin).toEqual(trailer.vin);
  });

  it('it finds all vehicles for a tenant', async () => {
    await service.create(
      {
        vin: '123abc',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '2',
    );

    const vehicles: Vehicle[] = await service.findAll('1');
    const t2Vehicles: Vehicle[] = await service.findAll('2');

    expect(vehicles).toBeDefined();
    expect(vehicles.length).toEqual(0);
    expect(t2Vehicles).toBeDefined();
    expect(t2Vehicles.length).toEqual(1);
  });

  it('it finds multiple vehicles by ids for a tenant', async () => {
    const vehicle1: Vehicle = await service.create(
      {
        vin: '123abc',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '1',
    );

    const vehicle2: Vehicle = await service.create(
      {
        vin: '123cde',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '1',
    );

    const vehicles = await service.findAllByIds(['123abc', '123cde'], '1');

    expect(vehicles).toBeDefined();
    expect(vehicles.length).toEqual(2);
    expect(vehicles[0].vin).toEqual(vehicle1.vin);
    expect(vehicles[1].vin).toEqual(vehicle2.vin);
  });

  it('it finds one vehicle by id for a tenant', async () => {
    const vehicle1: Vehicle = await service.create(
      {
        vin: '123abc',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '1',
    );

    const vehicle = await service.findOne('123abc', '1');

    expect(vehicle).toBeDefined();
    expect(vehicle.vin).toEqual(vehicle1.vin);
  });

  it('it updates a vehicle by id for a tenant and returns the updated vehicle', async () => {
    const vehicle1: Vehicle = await service.create(
      {
        vin: '123abc',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '1',
    );

    vehicle1.make = 'Ford';

    const updatedVehicle: Vehicle = await service.update(
      '123abc',
      vehicle1,
      '1',
    );

    expect(updatedVehicle).toBeDefined();
    expect(updatedVehicle.vin).toEqual(vehicle1.vin);
    expect(updatedVehicle.make).toEqual('Ford');
  });

  it('removes a vehicle by id for a tenant', async () => {
    await service.create(
      {
        vin: '123abc',
        make: 'Cargobull',
        model: '355',
        year: new Date(),
        km: 0,
        color: 'white',
        registration: '123abc',
        registrationDate: new Date(),
        country: 'Canada',
        type: 'trailer',
      },
      '1',
    );

    const vehicles = await service.findAll('1');

    expect(vehicles).toBeDefined();
    expect(vehicles.length).toEqual(1);

    await service.remove('123abc', '1');

    const vehiclesAfterDelete = await service.findOne('123abc', '1');
    console.log(vehiclesAfterDelete);
    expect(vehiclesAfterDelete).toBeNull();
  });
});
