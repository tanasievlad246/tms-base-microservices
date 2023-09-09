import { OrdersService } from '../services/orders';
import { Response, Request, NextFunction } from 'express';
import { controller, httpGet, request, response, interfaces, httpPost, requestBody } from 'inversify-express-utils';
import { inject } from 'inversify';
import { TYPES } from '../types';

@controller("/orders")
export class OrdersController implements interfaces.Controller {
    constructor(@inject(TYPES.OrdersService) private ordersService: OrdersService) {
        this.ordersService = ordersService;
    }

    @httpGet("/")
    public async getOrders(@request() req: Request, @response() res: Response) {
        res.send(await this.ordersService.getOrders());
    }

    @httpPost("/")
    public async createOrder(@request() req: Request, @response() res: Response) {
        const { name } = req.body;
        const order = await this.ordersService.createOrder(name);

        res.send(order);
    }
}