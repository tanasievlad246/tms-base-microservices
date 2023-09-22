import { DataSourceOptions, DataSource } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'hermestms',
  password: 'hermestmspw',
  database: 'tms2',
  logging: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/migrations/*.{ts,js}'],
};

export default new DataSource(config);
