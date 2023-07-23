import { Model, DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from 'sequelize';
import Role from './Role';

class Permission extends Model<InferAttributes<Permission>, InferCreationAttributes<Permission>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare machineName: string;

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
            tableName: "permissions",
        })
    }

    public static associate = () => {
        this.belongsToMany(Role, {
            through: "role_permissions",
        });
    }
    
}


export default Permission;