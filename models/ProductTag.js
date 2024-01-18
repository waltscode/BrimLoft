/*
* This file defines the ProductTag model, serving as a junction table to establish many-to-many relationships
* between the Product and Tag models (ie. multiple tags can be associated with a single product and a tag can be linked to multiple products).
* By associating of product_id with tag_id enables the grouping of products by tag -- useful for filters and searches
* The model is initialized using Sequelize and connected to the database through the sequelize instance.
*/ 
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

//Set up fields ie columns and rules for ProductTag model 
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;