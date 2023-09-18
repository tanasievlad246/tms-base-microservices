import { Container } from 'inversify';
import { AddressService } from '../services/address';
import { AddressController } from '../controllers/address';
import types from './types';

const container = new Container();

container.bind<AddressService>(types.AddressService).to(AddressService);
container.bind<AddressController>(types.AddressController).to(AddressController);

export default container;