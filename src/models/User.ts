import { Model, Optional, DataTypes } from 'sequelize';

type UserAttributes = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    roleId: number,
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id: number;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare roleId: number;
}

const typesDefinition = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
};

export default { model: User, typesDefinition };