import { Model, DataTypes, 
    InferAttributes, 
    InferCreationAttributes, 
    CreationOptional,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    HasManySetAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManyCountAssociationsMixin,
} from 'sequelize';
import Permission from './Permission';

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare machineName: string;

    declare getPermissions: HasManyGetAssociationsMixin<Permission>; // Note the null assertions!
    declare addPermission: HasManyAddAssociationMixin<Permission, number>;
    declare addPermissions: HasManyAddAssociationsMixin<Permission, number>;
    declare setPermissions: HasManySetAssociationsMixin<Permission, number>;
    declare removePermission: HasManyRemoveAssociationMixin<Permission, number>;
    declare removePermissions: HasManyRemoveAssociationsMixin<Permission, number>;
    declare hasPermission: HasManyHasAssociationMixin<Permission, number>;
    declare hasPermissions: HasManyHasAssociationsMixin<Permission, number>;
    declare countPermissions: HasManyCountAssociationsMixin;

    public static initModel = (sequelize: any) => {
        this.init({
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
        }, {
            sequelize,
            tableName: "roles",
        })
    }

    public static associate = () => {
        this.belongsToMany(Permission, {
            through: "role_permissions",
        });
    }
}

export default Role;