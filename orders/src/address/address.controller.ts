import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';
import { Request } from 'express';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UseGuards(AuthGuardGuard)
  create(@Body() createAddressDto: CreateAddressDto, @Req() req: Request) {
    createAddressDto.tenantId = req.user.tenantId;
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @UseGuards(AuthGuardGuard)
  findAll(@Req() req: Request) {
    const tenantId = req.user.tenantId;
    return this.addressService.findAll(tenantId);
  }
}
