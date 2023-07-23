"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Role_1 = __importDefault(require("./Role"));
const Post_1 = __importDefault(require("./Post"));
class User extends sequelize_1.Model {
}
_a = User;
User.initModel = (sequelize) => {
    _a.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: { msg: 'First name is required' },
            }
        },
        lastName: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: { msg: 'Last name is required' },
            }
        },
        email: {
            type: new sequelize_1.DataTypes.STRING(255),
            unique: true,
            allowNull: false,
            validate: {
                notNull: { msg: 'Email is required' },
                isEmail: { msg: 'Invalid email' },
            }
        },
        password: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: { msg: 'Password is required' },
                min: 8,
            }
        }
    }, {
        sequelize,
        tableName: "users",
    });
};
User.associate = () => {
    _a.belongsTo(Role_1.default, {
        foreignKey: 'roleId',
    });
    _a.hasMany(Post_1.default, {
        foreignKey: 'userId',
    });
};
exports.default = User;
