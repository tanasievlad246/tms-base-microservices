import { Controller, Get, Post, Body } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { DataSource } from 'typeorm';

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
      return {
        tenants: await this.tenantService.findAll(body.tenantName),
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
