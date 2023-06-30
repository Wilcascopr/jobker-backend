import { Model, Optional, DataTypes } from 'sequelize';

type RoleAttributes = {
    id: number,
    name: string,
    machineName: string,
};

type RoleCreationAttributes = Optional<RoleAttributes, 'id'>;

class Role extends Model<RoleAttributes, RoleCreationAttributes> {
    declare id: number;
    declare name: string;
    declare machineName: string;
}

const typesDefinition = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    machineName: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
};

export default { model: Role, typesDefinition };