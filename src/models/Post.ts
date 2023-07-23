import { Model, DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional 
} from 'sequelize';
import User from './User';

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare content: string;

    public static initModel = (sequelize: any) => {
        this.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new DataTypes.STRING(255),
                allowNull: false,
            },
            content: {
                type: new DataTypes.TEXT,
                allowNull: false,
            }, 
        }, {
            sequelize,
            tableName: "posts",
        })
    }

    public static associate = () => {
        this.belongsTo(User, {
            foreignKey: "userId",
        });
    }
}

export default Post;