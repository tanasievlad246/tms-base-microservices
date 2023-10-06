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
import { BusinessPartnerService } from './business-partner.service';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
import { Request } from 'express';

@Controller('business-partner')
export class BusinessPartnerController {
  constructor(
    private readonly businessPartnerService: BusinessPartnerService,
  ) {}

  @Post()
  create(
    @Body() createBusinessPartnerDto: CreateBusinessPartnerDto,
    @Req() req: Request,
  ) {
    return this.businessPartnerService.create(
      createBusinessPartnerDto,
      req.user.tenantId,
    );
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.businessPartnerService.findAll(req.user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.businessPartnerService.findOne(+id, req.user.tenantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessPartnerDto: UpdateBusinessPartnerDto,
    @Req() req: Request,
  ) {
    return this.businessPartnerService.update(
      +id,
      updateBusinessPartnerDto,
      req.user.tenantId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.businessPartnerService.remove(+id, req.user.tenantId);
  }
}
