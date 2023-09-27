import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll(@Request() req: Request) {
    const tenantId = req.headers['x-tenant-id'] as string;
    return this.addressService.findAll(tenantId);
  }
}
