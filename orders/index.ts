import { app } from './app';

const start = async () => {
    console.log('Starting up...');
    try {
        app.listen(3000, () => {
            console.log('Listening on port 3000!');
        });
    } catch (error) {
        console.log(error);
    }
};

start();
