import express from "express";
import connect from "./database/connection";
import migrate from "./database/migrations";
import router from "./routes/index";
import CookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(CookieParser());
app.use(router);

const startServer = async () => {
    try {
        const sequelize = await connect();
        if (!sequelize) throw new Error("Unable to connect to the database");
        await migrate(sequelize);
        app.listen(3000, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();