import { Model, Optional, DataTypes } from 'sequelize';

type PermissionAttributes = {
    id: number,
    name: string,
    machineName: string,
};

type PermissionCreationAttributes = Optional<PermissionAttributes, 'id'>;

class Permission extends Model<PermissionAttributes, PermissionCreationAttributes> {
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

export default { model: Permission, typesDefinition };