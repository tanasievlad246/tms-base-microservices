import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TenantOrigin } from './middleware/tenantOrigin';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
console.log(process.env.DATABASE_URL);

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantOrigin).forRoutes('*');
  }
}
