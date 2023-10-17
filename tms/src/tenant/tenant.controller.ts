import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { Request } from 'express';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

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
  @UseGuards(AuthGuardGuard)
  async findOne(@Req() req: Request) {
    try {
      const tenant = await this.tenantService.findOne(req.user.tenantId);
      return {
        tenant,
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
