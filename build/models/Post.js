"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("./User"));
class Post extends sequelize_1.Model {
}
_a = Post;
Post.initModel = (sequelize) => {
    _a.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        content: {
            type: new sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: "posts",
    });
};
Post.associate = () => {
    _a.belongsTo(User_1.default, {
        foreignKey: "userId",
    });
};
exports.default = Post;
