import { OrdersService } from '../services/orders';
import { Response, Request, NextFunction } from 'express';
import { controller, httpGet, request, response, interfaces } from 'inversify-express-utils';
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
}