import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieSession from 'cookie-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/orders');
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cookieSession({
      signed: false, // Disables encryption
      secure: 'test', // Cookies only over HTTPS
    }),
  );
  await app.listen(3000);
}
bootstrap();
