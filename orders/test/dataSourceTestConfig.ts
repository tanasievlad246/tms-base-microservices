import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from '../typeOrm.config';
import { DataSource } from 'typeorm';

export async function databaseConnectionFactory(): Promise<TypeOrmModuleOptions> {
  // Create a TypeORM connection and run migrations
  //   const { createConnection, Connection } = require('typeorm');
  //   const connection: Connection = await createConnection(dbConfig);
  //   await connection.runMigrations();

  const conn = new DataSource(config);
  await conn.initialize();
  await conn.runMigrations();

  return config;
}

export default {
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: databaseConnectionFactory,
    }),
  ],
};
