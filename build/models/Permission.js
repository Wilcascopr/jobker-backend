"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Permission extends sequelize_1.Model {
}
const typesDefinition = {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    machineName: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
};
exports.default = { model: Permission, typesDefinition };
