import { Injectable } from '@nestjs/common';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
import { DataSource, Repository } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';
import { BusinessPartner } from './entities/business-partner.entity';
import { Address } from 'src/address/entities/address.entity';
import { BusinessPartnerStatus } from 'src/types/enums';

@Injectable()
export class BusinessPartnerService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
  ) {}

  async create(
    createBusinessPartnerDto: CreateBusinessPartnerDto,
    tenantId: string,
  ) {
    return await this.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(BusinessPartner);
      const addressRepo = manager.getRepository(Address);

      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      await this.tenantService.setCurrentTenantOnRepository(
        addressRepo,
        tenantId,
      );

      const address = await addressRepo.findOneBy(
        createBusinessPartnerDto.address,
      );

      const businessPartner = repo.create(createBusinessPartnerDto);
      businessPartner.address = address;
      businessPartner.status = BusinessPartnerStatus.ACTIVE;

      return await repo.save(businessPartner);
    });
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo = manager.getRepository(BusinessPartner);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find({
        relations: ['address'],
      });
    });
  }

  async findOne(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo = await manager.getRepository(BusinessPartner);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findOne({
        where: { id },
        relations: ['address'],
      });
    });
  }

  async update(
    id: number,
    updateBusinessPartnerDto: UpdateBusinessPartnerDto,
    tenantId: string,
  ) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<BusinessPartner> =
        manager.getRepository(BusinessPartner);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const businessPartner = await repo.findOne({
        where: { id },
      });
      const updatedBusinessPartner = repo.merge(
        businessPartner,
        updateBusinessPartnerDto,
      );
      repo.save(updatedBusinessPartner);
    });
  }

  async remove(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<BusinessPartner> =
        manager.getRepository(BusinessPartner);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);

      const businessPartner = await repo.delete(id);
      return businessPartner;
    });
  }
}
