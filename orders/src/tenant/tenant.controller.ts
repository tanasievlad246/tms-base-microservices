import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { DataSource } from 'typeorm';
import { Tenant } from './entities/tenant.entity';

@Controller('tenant')
export class TenantController {
  constructor(
    private readonly tenantService: TenantService,
    private readonly dataSource: DataSource,
  ) {}

  @Post()
  async create(@Body() createTenantDto: CreateTenantDto) {
    try {
      return {
        tenant: await this.tenantService.create(createTenantDto),
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  @Get()
  async findAll(@Body() body: { tenantName: string }) {
    try {
      return await this.dataSource.transaction(async (manager) => {
        const repo = manager.getRepository(Tenant);
        await this.tenantService.setCurrentTenantOnRepository(
          repo,
          body.tenantName,
        );
        return repo.find();
      });
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTenantDto: UpdateTenantDto) {
    try {
      return {
        tenant: this.tenantService.update(id, updateTenantDto),
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }
}
