import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { DataSource, In, Repository } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class VehicleService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(createVehicleDto: CreateVehicleDto, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const vehicle = repo.create(createVehicleDto);
      return await repo.save(vehicle);
    });
  }

  async assignTrailerToVehicle(
    trailerId: string,
    vehicleId: string,
    tenantId: string,
  ) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const vehicle = await repo.findOneBy({
        vin: vehicleId,
      });
      const trailer = await repo.findOneBy({
        vin: trailerId,
      });
      vehicle.trailer = trailer;
      return await repo.save(vehicle);
    });
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find();
    });
  }

  async findAllByIds(ids: number[], tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findBy({
        id: In(ids),
      });
    });
  }

  async findOne(vin: string, tenantId: string): Promise<Vehicle> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findOneBy({ vin });
    });
  }

  async update(
    vin: string,
    updateVehicleDto: UpdateVehicleDto,
    tenantId: string,
  ) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const vehicle = await repo.findOneBy({ vin });
      const mergedVehicle = repo.merge(vehicle, updateVehicleDto);
      return await repo.save(mergedVehicle);
    });
  }

  async remove(vin: string, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Vehicle> = manager.getRepository(Vehicle);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.delete(vin);
    });
  }
}
