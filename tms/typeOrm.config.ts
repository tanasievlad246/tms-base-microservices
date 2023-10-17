import { DataSourceOptions, DataSource } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: 5432,
  username: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB,
  // logging: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['./migrations/*.{ts,js}'],
};

export const testConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'hermestms',
  password: 'hermestmspw',
  database: 'tms2',
  // logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['./migrations/*.{ts,js}'],
};

export default new DataSource(config);
