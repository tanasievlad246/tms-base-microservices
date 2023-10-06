import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Request } from 'express';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Post()
  create(@Body() createParcelDto: CreateParcelDto, @Req() req: Request) {
    return this.parcelService.create(createParcelDto, req.user.tenantId);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.parcelService.findAll(req.user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.parcelService.findOne(+id, req.user.tenantId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelService.update(+id, updateParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.parcelService.remove(+id, req.user.tenantId);
  }
}
