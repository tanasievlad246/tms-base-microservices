import { DataSourceOptions, DataSource } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  username: 'hermestms',
  password: 'hermestmspw',
  database: 'tms2',
  logging: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['./migrations/*.{ts,js}'],
};

export default new DataSource(config);
