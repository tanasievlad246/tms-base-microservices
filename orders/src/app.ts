import express, { json } from 'express';
import addressRouter from './routes/address';
import { container } from './container';

const app = express();

app.use(json());

app.use(addressRouter);

app.all('*', (req, res) => {
  res.status(404).send({
    messaage: 'Not Found'
  });
});

export { app };
