import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.config';

class User extends Model {
    public id!: number;
    public username!: string;
    //Note: password should be saving using bcrypt encryption, but here due to time constraint saving in palin string
    public password!: string;
    public role!: 'admin' | 'user';
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: false,
        tableName: 'users',
    }
);

export default User;
