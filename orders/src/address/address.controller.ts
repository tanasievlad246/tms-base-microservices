import { Controller, Get, Post, Body } from '@nestjs/common';
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
  findAll() {
    return this.addressService.findAll();
  }

  @Post('tenant')
  async createTenant(@Body() body: any) {
    try {
      return this.addressService.createSchema(body.schemaName);
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }

  @Post('schema')
  async syncSchema(@Body() body: any) {
    try {
      console.log(body);
      return await this.addressService.syncSchema(body.schemaName);
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }
}
