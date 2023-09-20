import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  create(@Body() createTenantDto: CreateTenantDto) {
    try {
      return {
        tenant: this.tenantService.create(createTenantDto),
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
  findAll() {
    try {
      return {
        items: this.tenantService.findAll(),
        success: true,
      };
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
