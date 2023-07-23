import express from "express";
import sequelize from "./database/sequelize";
import migrate from "./database/migrations";
import router from "./routes/index";
import CookieParser from "cookie-parser";
import seedDB from "./database/seeders/DatabaseSeeder";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(CookieParser());
app.use(router);

const startDB = async () => {
    try {
        await sequelize.authenticate();
        await migrate(sequelize);
        await seedDB();
        console.log("Database connected");
    } catch (error) {
        console.error(error);
    }
}

const startServer = async () => {
    try {
        await startDB();
        app.listen(process.env.PORT, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();