/*
 * This file defines the Category model, with the fields id (primary key) and category_name.
 * The model is initialized using Sequelize and connected to the database through the sequelize instance.
 * In the big picture having this table enables grouping of products, useful for searching and browsing by category.
 * There is a list of products that can be turned up with the same category_id. 
 */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const League = require('./League.js'); // Import the League model

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quote: {
      type: DataTypes.TEXT, 
      allowNull: true, 
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: true, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
