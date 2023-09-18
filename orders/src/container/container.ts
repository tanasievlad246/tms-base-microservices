import 'reflect-metadata';
import { Container } from 'inversify';
import { AddressService } from '../services/address';
import { AddressController } from '../controllers/address';

const container = new Container();

container.bind<AddressService>(AddressService).toSelf().inSingletonScope();
container.bind<AddressController>(AddressController).toSelf().inSingletonScope();

export default container;