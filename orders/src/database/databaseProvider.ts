import { Provider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { DatabaseService } from './databaseService';

export const dataSourceFactory: { [key: string]: Provider } = {
  [Scope.DEFAULT]: {
    provide: 'data_source',
    useFactory: (): null => null,
  },
  [Scope.REQUEST]: {
    provide: 'data_source',
    inject: [REQUEST, DatabaseService],
    useFactory: async (
      databaseService: DatabaseService,
      request: any,
    ): Promise<DataSource> => {
      console.log(request.body);
      const instance = databaseService.getDBDataSource(request.body.schemaName);
      return instance;
    },
  },
};
