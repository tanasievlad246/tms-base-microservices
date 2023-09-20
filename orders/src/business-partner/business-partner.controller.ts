import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessPartnerService } from './business-partner.service';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';

@Controller('business-partner')
export class BusinessPartnerController {
  constructor(
    private readonly businessPartnerService: BusinessPartnerService,
  ) {}

  @Post()
  create(@Body() createBusinessPartnerDto: CreateBusinessPartnerDto) {
    return this.businessPartnerService.create(createBusinessPartnerDto);
  }

  @Get()
  findAll() {
    return this.businessPartnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessPartnerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessPartnerDto: UpdateBusinessPartnerDto,
  ) {
    return this.businessPartnerService.update(+id, updateBusinessPartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessPartnerService.remove(+id);
  }
}
