import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  findAll() {
    return this.addressService.findAll();
  }

  findOne(id: number) {
    return this.addressService.findOne(id);
  }

  update(updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(updateAddressDto.id, updateAddressDto);
  }

  remove(id: number) {
    return this.addressService.remove(id);
  }
}
