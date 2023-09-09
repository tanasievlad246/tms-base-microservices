import { app } from "../app";

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log('Orders service is listening on 3000');
        })
    } catch (error) {
        console.log(error);
    }
}

start();