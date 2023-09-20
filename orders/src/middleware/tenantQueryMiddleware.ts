import { Injectable, NestMiddleware } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TenantQueryMiddleware implements NestMiddleware {
  constructor(private readonly dataSource: DataSource) {}
  async use(req: any, res: any, next: (error?: any) => void) {
    console.log('TenantQueryMiddleware');
    console.log(req.query);
    await this.dataSource.query(
      `SET search_path TO ${req.headers['x-tenant']}`,
    );
    next();
  }
}
