"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Role_1 = __importDefault(require("./Role"));
class Permission extends sequelize_1.Model {
}
_a = Permission;
Permission.initModel = (sequelize) => {
    _a.init({
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
    }, {
        sequelize,
        tableName: "permissions",
    });
};
Permission.associate = () => {
    _a.belongsToMany(Role_1.default, {
        through: "role_permissions",
    });
};
exports.default = Permission;
