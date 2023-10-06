import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'postgres',
          port: 5432,
          username: 'hermestms',
          password: 'hermestmspw',
          database: 'tms2',
          entities: [__dirname + '/**/*.entity.{ts,js}'],
          migrations: ['dist/migrations/*.{ts,js}'],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});
