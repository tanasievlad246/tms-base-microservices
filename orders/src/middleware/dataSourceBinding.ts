import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { TenantConnectionManager } from "../database/connectionManager";
import { NextFunction, Request, Response } from "express";
import { DataSource } from "typeorm";
import { types } from "../container";

@injectable()
export default class DataSourceBindingMiddleware extends BaseMiddleware {
    // @inject(TenantConnectionManager) private readonly tenantConnectionManager: any;
    constructor(@inject(TenantConnectionManager) private readonly tenantConnectionManager: any;) {
        super();
    }

    public async handler(req: Request, res: Response, next: NextFunction) {
        // req.container.bind('DataSource').toConstantValue(this._dataSource);
        // bind the tennant connection manager getConnection function so that i can access it in the controllers that use this middleware
        console.log('binding datasource');
        this.bind<DataSource>(types.TenantConnection).toDynamicValue(() => {
            return this.tenantConnectionManager.getConnection(req.body.name);
        }).inRequestScope();
        next();
    }
}