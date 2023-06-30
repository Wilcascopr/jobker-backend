"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const typesDefinition = {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
};
exports.default = { model: User, typesDefinition };
