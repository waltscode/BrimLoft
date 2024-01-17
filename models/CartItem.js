const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// CartItem model: Represents items in a shopping cart
class CartItem extends Model {}

CartItem.init({
  // Column definitions
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'shopping_cart', // References the 'shopping_cart' table
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product', // References the 'product' table
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Ensures at least 1 item is present
    },
  },
  // Additional columns can be defined here if needed
}, {
  // Model options
  sequelize,
  timestamps: true, // Enables automatic timestamping
  freezeTableName: true,
  underscored: true,
  modelName: 'cart_item', // Sequelize pluralizes to 'cart_items'
});

module.exports = CartItem;
