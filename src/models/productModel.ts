import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.config';

class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public stock!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
  }
);

export default Product;
