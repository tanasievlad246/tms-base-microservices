import "reflect-metadata";
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "root",
    password: "root",
    database: "default_db",
    synchronize: true,
    logging: true,
    entities: ['src/models/*.ts'],
});

export default dataSource;
