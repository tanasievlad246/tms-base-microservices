import { json } from "express";
import { appConfigured } from "./app";
import { dataSource } from "./dataSource";

const start = async () => {
    try {
        await dataSource.initialize();
        appConfigured.listen(3000, () => {
            console.log('Orders service is listening on 3000');
        })
    } catch (error) {
        console.log(error);
    }
}

start();
