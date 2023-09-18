import express, { json } from 'express';

const app = express();

app.use(json());

app.all('*', (req, res) => {
  res.status(404).send({
    messaage: 'Not Found'
  });
});

export { app };
