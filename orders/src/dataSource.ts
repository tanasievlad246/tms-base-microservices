import { DataSource } from "typeorm";
import { Order } from "./models/orders";

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'mysqluser',
    password: 'password',
    database: 'orders',
    synchronize: true,
    logging: true,
    entities: [Order]
})
