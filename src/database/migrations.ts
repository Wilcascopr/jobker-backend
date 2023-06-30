import { Sequelize } from "sequelize";
import UserModel from "../models/User";
import PostModel from "../models/Post";
import RoleModel from "../models/Role";
import PermissionModel from "../models/Permission";

const initModels = (sequelize: Sequelize) => {
    UserModel.model.init(UserModel.typesDefinition, {
        sequelize,
        tableName: "users",
    });
    PostModel.model.init(PostModel.typesDefinition, {
        sequelize,
        tableName: "posts",
    });
    RoleModel.model.init(RoleModel.typesDefinition, {
        sequelize,
        tableName: "roles",
    });
    PermissionModel.model.init(PermissionModel.typesDefinition, {
        sequelize,
        tableName: "permissions",
    });
    PermissionModel.model.belongsToMany(RoleModel.model, {
        through: "role_permissions",
    });
    UserModel.model.hasOne(PostModel.model);
}

const migrate = async (sequelize: Sequelize) => {
    try {
        initModels(sequelize);
        await sequelize.sync({ force: false });
        console.log("Migrations complete");
    } catch (error) {
        console.error("Unable to migrate: ", error);
    }
}

export default migrate;
