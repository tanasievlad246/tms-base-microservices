import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantOrigin implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { host } = req.headers;
    const tenantId = host.toString().split('.')[0];
    req.tenantId = tenantId;
    next();
  }
}
