const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// ShoppingCart model extending from Sequelize's Model class
class ShoppingCart extends Model {}

// Model initialization with schema definition
ShoppingCart.init({
  // Schema definition
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user', // References the 'user' table
      key: 'id',
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
  // Additional fields can be added here
}, {
  // Model options
  sequelize,
  timestamps: false, // Change to true if automatic timestamping is needed
  freezeTableName: true,
  underscored: true,
  modelName: 'shopping_cart', // Sequelize pluralizes to 'shopping_carts'
});

module.exports = ShoppingCart;
