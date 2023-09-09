import { injectable } from "inversify";

@injectable()
export class OrdersService {
    public async getOrders() {
        console.log('ordersService.getOrders')
        return [
            {
                id: 1,
                name: "Order 1"
            },
            {
                id: 2,
                name: "Order 2"
            }
        ];
    }
}
