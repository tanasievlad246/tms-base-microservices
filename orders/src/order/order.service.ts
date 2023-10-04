import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DataSource, Repository } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';
import { Order } from './entities/order.entity';
import { BusinessPartnerService } from 'src/business-partner/business-partner.service';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { Address } from 'src/address/entities/address.entity';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
    private readonly businessPartnerService: BusinessPartnerService,
    private readonly vehicleService: VehicleService,
    private readonly addressService: AddressService,
  ) {}

  async create(createOrderDto: CreateOrderDto, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const orderRepo: Repository<Order> = manager.getRepository(Order);
      await this.tenantService.setCurrentTenantOnRepository(
        orderRepo,
        tenantId,
      );

      const sender = await this.businessPartnerService.findOne(
        createOrderDto.senderId,
        tenantId,
      );
      const receiver = await this.businessPartnerService.findOne(
        createOrderDto.receiverId,
        tenantId,
      );
      const vehicle = await this.vehicleService.findOne(
        createOrderDto.vehicleId,
        tenantId,
      );

      const loadings = await this.addressService.findManyByIds(
        this.extractAddressIds(createOrderDto.loadings),
        tenantId,
      );

      const unloadings = await this.addressService.findManyByIds(
        this.extractAddressIds(createOrderDto.loadings),
        tenantId,
      );

      const { billingUnit, distance, endTime, goods, price, startTime } =
        createOrderDto;

      const order: Order = orderRepo.create();
      order.billingUnit = billingUnit;
      order.distance = distance;
      order.endTime = endTime;
      order.goods = goods;
      order.loadings = loadings;
      order.price = price;
      order.receiver = receiver;
      order.sender = sender;
      order.startTime = startTime;
      order.unloadings = unloadings;
      order.vehicle = vehicle;
      order.total = price * distance;

      const savedOrder = await orderRepo.save(order);
      return savedOrder;
    });
  }

  private extractAddressIds(addresses: Address[]): number[] {
    return addresses.map((address) => address.id);
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Order> = manager.getRepository(Order);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.find();
    });
  }

  async findOne(id: number, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Order> = manager.getRepository(Order);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      return await repo.findOneBy({ id });
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Order> = manager.getRepository(Order);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const order = await repo.findOneBy({ id });
      const updatedOrder = repo.merge(order, updateOrderDto);
      return await repo.save(updatedOrder);
    });
  }

  async updateStatus(id: number, status: string, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const repo: Repository<Order> = manager.getRepository(Order);
      await this.tenantService.setCurrentTenantOnRepository(repo, tenantId);
      const order = await repo.findOneBy({ id });
      const updatedOrder = repo.merge(order, { status });
      return await repo.save(updatedOrder);
    });
  }
}
