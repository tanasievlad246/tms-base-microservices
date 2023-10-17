import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Request } from 'express';
import { AuthGuardGuard } from '../auth-guard/auth-guard.guard';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseGuards(AuthGuardGuard)
  create(@Body() createVehicleDto: CreateVehicleDto, @Req() req: Request) {
    return this.vehicleService.create(createVehicleDto, req.user.tenantId);
  }

  @Get()
  @UseGuards(AuthGuardGuard)
  findAll(@Req() req: Request) {
    return this.vehicleService.findAll(req.user.tenantId);
  }

  @Get(':id')
  @UseGuards(AuthGuardGuard)
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.vehicleService.findOne(id, req.user.tenantId);
  }

  @Patch(':id')
  @UseGuards(AuthGuardGuard)
  update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
    @Req() req: Request,
  ) {
    return this.vehicleService.update(id, updateVehicleDto, req.user.tenantId);
  }

  @Delete(':id')
  @UseGuards(AuthGuardGuard)
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.vehicleService.remove(id, req.user.tenantId);
  }
}
