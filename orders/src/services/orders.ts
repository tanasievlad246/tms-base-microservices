import { inject, injectable } from "inversify";
import { Order } from "../models/orders";
import { Repository } from "typeorm";

@injectable()
export class OrdersService {
    constructor(@inject('OrdersRepository') private ordersRepository: Repository<Order>) {}

    public async getOrders() {
        console.log('ordersService.getOrders')
        return await this.ordersRepository.find();
    }

    public async createOrder(name: string) {
        console.log('ordersService.createOrder')
        const order = this.ordersRepository.create({
            name
        });
        return await this.ordersRepository.save(order);
    }
}
