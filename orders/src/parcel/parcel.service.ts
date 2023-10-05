import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Parcel } from './entities/parcel.entity';
import { DataSource, In, Repository } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class ParcelService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}
  async create(
    createParcelDto: CreateParcelDto,
    tenantId: string,
  ): Promise<Parcel> {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Parcel> = manager.getRepository(Parcel);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const parcel: Parcel = repo.create(createParcelDto);
      return await repo.save(parcel);
    });
  }

  async findAll(tenantId: string): Promise<Parcel[]> {
    return await this.dataSource.transaction(async (manager) => {
      const parcelRepo: Repository<Parcel> = manager.getRepository(Parcel);
      await this.tenantService.setCurrentTenantOnRepository(
        parcelRepo,
        tenantId,
      );

      return await parcelRepo.find();
    });
  }

  async findManyByIds(ids: number[], tenantId: string): Promise<Parcel[]> {
    return await this.dataSource.transaction(async (manager) => {
      const parcelRepo: Repository<Parcel> = manager.getRepository(Parcel);
      await this.tenantService.setCurrentTenantOnRepository(
        parcelRepo,
        tenantId,
      );

      return await parcelRepo.findBy({ id: In(ids) });
    });
  }

  async findOne(id: number, tenantId: string): Promise<Parcel> {
    return await this.dataSource.transaction(async (manager) => {
      const parcelRepo: Repository<Parcel> = manager.getRepository(Parcel);
      await this.tenantService.setCurrentTenantOnRepository(
        parcelRepo,
        tenantId,
      );

      return await parcelRepo.findOneBy({ id });
    });
  }

  async update(id: number, updateParcelDto: UpdateParcelDto): Promise<Parcel> {
    return await this.dataSource.transaction(async (manager) => {
      const parcelRepo: Repository<Parcel> = manager.getRepository(Parcel);
      const parcel: Parcel = await parcelRepo.findOneBy({ id });
      parcelRepo.merge(parcel, updateParcelDto);
      return await parcelRepo.save(parcel);
    });
  }

  async remove(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const parcelRepo: Repository<Parcel> = manager.getRepository(Parcel);
      await this.tenantService.setCurrentTenantOnRepository(
        parcelRepo,
        tenantId,
      );
      return await parcelRepo.delete(id);
    });
  }
}
