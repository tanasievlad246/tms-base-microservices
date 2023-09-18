import express, { json } from 'express';
import addressRouter from './src/routes/address';

const app = express();

app.use(json());

app.use(addressRouter);

app.all('*', (req, res) => {
  res.status(404).send({
    messaage: 'Not Found'
  });
});

export { app };
