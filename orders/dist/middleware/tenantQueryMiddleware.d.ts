import { NestMiddleware } from '@nestjs/common';
import { DataSource } from 'typeorm';
export declare class TenantQueryMiddleware implements NestMiddleware {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    use(req: any, res: any, next: (error?: any) => void): Promise<void>;
}
