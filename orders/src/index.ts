import app from "./app";
import dataSource from "./dataSource";

const start = async () => {
    try {
        await dataSource.initialize();
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    } catch (error) {
        console.log(error);
        console.log('Failed to connect to database');
    }
}

start();
