import express, { Express, json } from 'express';

const app: Express = express();

app.use(json());

app.all('*', (req, res) => {
    res.status(404).send({
        success: false,
        message: 'Resource not found',
    });
});

export default app;
