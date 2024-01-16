/*
 * This file defines the Product model, which includes the fields id, name, description, price, image_url,
 * num_in_stock, rating, and is_featured, as well as a foreign key reference to the Category model. Float as
 * the datatype for rating will allow decimal values. is_featured (a boolean value) will allow us to apply 
 * discounts to featured items in the business logic. In the big picture having a products table enables
 * product display (in groupings (findAll) or a detailed listing by id. All the relevant information to make 
 * up a product card or listing can be rendered from this table. Products have relations to categories, orderItems and reviews 
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), //numbers no greater than 10 digits in total where last two digits are reserved as decimal places
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    num_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
