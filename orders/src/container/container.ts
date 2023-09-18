import 'reflect-metadata';
import { Container } from 'inversify';
import { AddressService } from '../services/address';
import { AddressController } from '../controllers/address';
import { TenantConnectionManager } from '../database/connectionManager';
import { DataSource } from 'typeorm';
import AppDataSource from '../dataSource';

const container = new Container();

container.bind<AddressService>(AddressService).toSelf().inSingletonScope();
container.bind<AddressController>(AddressController).toSelf().inSingletonScope();
container.bind<TenantConnectionManager>(TenantConnectionManager).to(TenantConnectionManager).inRequestScope();
container.bind<DataSource>(DataSource).toDynamicValue(() => {
    return AppDataSource;
}).inRequestScope();

export default container;