import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.config';
import UserModel from './userModel';
import ProductModel from './productModel';

class Order extends Model {
    public id!: number;
    public userid!: number;
    public productid!: number;
    public quantity!: number;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
        productid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProductModel,
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: false,
    }
);

UserModel.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(UserModel, { foreignKey: 'userId' });

ProductModel.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(ProductModel, { foreignKey: 'productId' });

export default Order;
