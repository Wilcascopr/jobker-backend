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
}
const sequelize = new Sequelize(dbData as Options);

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return sequelize;
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
        return null;
    }
}

export default connect;
