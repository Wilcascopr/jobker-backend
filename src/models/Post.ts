import { Model, Optional, DataTypes } from 'sequelize';

type PostAttributes = {
    id: number,
    title: string,
    content: string,
    userId: number,
};

type PostCreationAttributes = Optional<PostAttributes, 'id'>;

class Post extends Model<PostAttributes, PostCreationAttributes> {
    declare id: number;
    declare title: string;
    declare content: string;
    declare userId: number;
}

const typesDefinition = {
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
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
};

export default { model: Post, typesDefinition };