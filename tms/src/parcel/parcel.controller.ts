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
import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { Request } from 'express';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Post()
  @UseGuards(AuthGuardGuard)
  create(@Body() createParcelDto: CreateParcelDto, @Req() req: Request) {
    return this.parcelService.create(createParcelDto, req.user.tenantId);
  }

  @Get()
  @UseGuards(AuthGuardGuard)
  findAll(@Req() req: Request) {
    return this.parcelService.findAll(req.user.tenantId);
  }

  @Get(':id')
  @UseGuards(AuthGuardGuard)
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.parcelService.findOne(+id, req.user.tenantId);
  }

  @Patch(':id')
  @UseGuards(AuthGuardGuard)
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelService.update(+id, updateParcelDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuardGuard)
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.parcelService.remove(+id, req.user.tenantId);
  }
}
