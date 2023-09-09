import { TYPES } from '../types';
import { Container } from 'inversify';
import { OrdersService } from '../services/orders';

const container = new Container();

container.bind<OrdersService>(TYPES.OrdersService ).to(OrdersService).inSingletonScope();
export default container;