import { Controller, Get, Post, Body, Patch, Param, Req } from '@nestjs/common';
import { OperationService } from './operation.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { Request } from 'express';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(@Body() createOperationDto: CreateOperationDto, @Req() req: Request) {
    return this.operationService.create(createOperationDto, req.user.tenantId);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.operationService.findAll(req.user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.operationService.findOne(+id, req.user.tenantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperationDto: UpdateOperationDto,
    @Req() req: Request,
  ) {
    return this.operationService.update(
      +id,
      updateOperationDto,
      req.user.tenantId,
    );
  }
}
