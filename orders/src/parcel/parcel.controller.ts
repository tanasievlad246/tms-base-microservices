import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';

@Controller()
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @MessagePattern('createParcel')
  create(@Payload() createParcelDto: CreateParcelDto) {
    return this.parcelService.create(createParcelDto);
  }

  @MessagePattern('findAllParcel')
  findAll() {
    return this.parcelService.findAll();
  }

  @MessagePattern('findOneParcel')
  findOne(@Payload() id: number) {
    return this.parcelService.findOne(id);
  }

  @MessagePattern('updateParcel')
  update(@Payload() updateParcelDto: UpdateParcelDto) {
    return this.parcelService.update(updateParcelDto.id, updateParcelDto);
  }

  @MessagePattern('removeParcel')
  remove(@Payload() id: number) {
    return this.parcelService.remove(id);
  }
}
