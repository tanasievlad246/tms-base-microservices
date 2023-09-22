import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from './user/.module';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [Module, TenantModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
