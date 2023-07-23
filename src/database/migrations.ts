import { Sequelize } from "sequelize";
import User from "../models/User";
import Post from "../models/Post";
import Role from "../models/Role";
import Permission from "../models/Permission";

const initModels = async (sequelize: Sequelize) => {
    User.initModel(sequelize);
    Post.initModel(sequelize);
    Role.initModel(sequelize);
    Permission.initModel(sequelize);

    User.associate();
    Post.associate();
    Role.associate();
    Permission.associate();
}

const migrate = async (sequelize: Sequelize) => {
    try {
        initModels(sequelize);
        await sequelize.sync({ alter: true });
        console.log("Migrations complete");
    } catch (error) {
        console.error("Unable to migrate: ", error);
    }
}

export default migrate;
