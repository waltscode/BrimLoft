/*
 * This file defines the OrderItem model, representing individual items within an order. Its fields are: 
 * id (primary key), order_id (foreign key to the Order model), product_id (foreign key to the Product model), 
 * quantity, and price_at_purchase.
 * The model is initialized using Sequelize and connected to the database through the sequelize instance.
 * In the big picture, having the OrderItem table enables rendering detailed order information in the UX, 
 * capturing properties like quantity and price_at_purchase. This table has a relationship with both the Order
 * and Product models.
 */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class OrderItem extends Model {}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price_at_purchase: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderItem',
  }
);

module.exports = OrderItem;
