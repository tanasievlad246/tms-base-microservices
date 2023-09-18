import { app } from './app';
import AppDataSource from './dataSource';

process.env['DEBUG'] = 'inversify*';

const start = async () => {
    console.log('Starting up...');
    try {
        await AppDataSource.initialize();
        app.listen(3000, () => {
            console.log('Listening on port 3000!');
        });
    } catch (error) {
        console.log(error);
    }
};

start();
