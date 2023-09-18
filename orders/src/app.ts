import { json } from 'express';
import { container } from './container';
import { InversifyExpressServer } from 'inversify-express-utils';

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(json());
});

const app = server.build();

export { app };
