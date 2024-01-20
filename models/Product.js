/*
 * This file defines the Product model, which includes the fields id, name, quote, description, price, 
 * image1_url, image2_url, image3_url, image4_url, image5_url, num_in_stock, rating, num_of_reviews, and is_featured, 
 * as well as a foreign key reference to the Category model. Float as the datatype for rating will allow decimal values. 
 * is_featured (a boolean value) will allow us to apply discounts to featured items in the business logic. In the big 
 * picture having a products table enables product display (in groupings (findAll) or a detailed listing by id. All the 
 * relevant information to make up a product card or listing can be rendered from this table. Products have relations to 
 * categories, orderItems and reviews 
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
    quote: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), //numbers no greater than 10 digits in total where last two digits are reserved as decimal places
      allowNull: false,
    },
    image1_url: {  //up to five images can be stored in the database in association with this product -- to facilitate a carousel
      type: DataTypes.STRING,
      allowNull: true,
    },
    image2_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image3_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image4_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image5_url: {
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
    num_of_reviews: { //there is a difference between a product with a 5 star rating based on 2 reviews and a five star rating based on 1000 reviews. Many sites display the number of reviews in brackets after the number
      type: DataTypes.INTEGER,
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
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'teams',
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
