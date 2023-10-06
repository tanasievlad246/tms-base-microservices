import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../../typeOrm.config';
import { DataSource } from 'typeorm';

export const databaseConnectionFactory = async () => {
  try {
    const conn = new DataSource(config);
    await conn.initialize();
    setTimeout(async () => await conn.runMigrations(), 30000);
    return config;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const TypeOrmPostgresTestingModule = () =>
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: 5432,
    username: 'hermestms',
    password: 'hermestmspw',
    database: 'tms2',
    logging: true,
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: ['./migrations/*.{ts,js}'],
  });
