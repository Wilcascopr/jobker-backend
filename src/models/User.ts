import { Model, DataTypes, 
    InferAttributes, 
    InferCreationAttributes, 
    CreationOptional 
} from 'sequelize';
import Role from './Role';
import Post from './Post';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;

    public static initModel = (sequelize: any) => {
        this.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: new DataTypes.STRING(255),
                allowNull: false,
                validate: {
                    notNull: { msg: 'First name is required' },
                }
            },
            lastName: {
                type: new DataTypes.STRING(255),
                allowNull: false,
                validate: {
                    notNull: { msg: 'Last name is required' },
                }
            },
            email: {
                type: new DataTypes.STRING(255),
                unique: true,
                allowNull: false,
                validate: {
                    notNull: { msg: 'Email is required' },
                    isEmail: { msg: 'Invalid email' },
                }
            },
            password: {
                type: new DataTypes.STRING(255),
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
    }

    public static associate = () => {
        this.belongsTo(Role, {
            foreignKey: 'roleId',
        });
        this.hasMany(Post, {
            foreignKey: 'userId',
        });
    }

}

export default User;