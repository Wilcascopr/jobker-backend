import { Options, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbData = {
    dialect: process.env.DB_DIALECT || "postgres",
    database: process.env.DB_DATABASE || "jobker",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    logging: false,
}
const sequelize = new Sequelize(dbData as Options);

export default sequelize;