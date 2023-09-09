import 'reflect-metadata';
import express, { Express, json } from 'express';
import container from './containers';
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

import "./controllers/orders";

const app: Express = express();

app.use(json());

const server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

export const appConfigured = server.build();
