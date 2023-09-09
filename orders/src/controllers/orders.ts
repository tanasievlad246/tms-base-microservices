import { OrdersService } from '../services/orders';
import { Response, Request, NextFunction } from 'express';
import { controller, httpGet, request, response, interfaces } from 'inversify-express-utils';
import { inject } from 'inversify';
import { TYPES } from '../types';

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("middleware")
    next();
}

const testMiddleware2 = (req: Request, res: Response, next: NextFunction) => {
    console.log("middleware2")
    next();
}

@controller("/orders", testMiddleware, testMiddleware2)
export class OrdersController implements interfaces.Controller {
    constructor(@inject(TYPES.OrdersService) private ordersService: OrdersService) {
        this.ordersService = ordersService;
    }

    @httpGet("/")
    public async getOrders(@request() req: Request, @response() res: Response) {
        res.send(await this.ordersService.getOrders());
    }
}