import { TYPES } from '../types';
import { Container } from 'inversify';
import { OrdersService } from '../services/orders';
import { Repository } from 'typeorm';
import { dataSource } from '../dataSource';
import { Order } from '../models/orders';

const container = new Container();

container.bind<OrdersService>(TYPES.OrdersService).to(OrdersService).inSingletonScope();
container.bind<Repository<Order>>('OrdersRepository').toDynamicValue(() => {
    return dataSource.manager.connection.getRepository(Order);
})

export default container;