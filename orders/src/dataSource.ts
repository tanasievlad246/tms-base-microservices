import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "mysqluser",
    password: "password",
    database: "default_db",
    synchronize: true,
    logging: true,
    entities: ['src/models/**/*.ts'],
})

export default AppDataSource;
