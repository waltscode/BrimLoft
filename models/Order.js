/*
 * This file defines the Order model, which has fields id (primary key), user_id (foreign key to the User model), 
 * total_amount, and order_date.
 * The model is initialized using Sequelize and connected to the database through the sequelize instance.
 * In the big picture the Order model can be used to invoice an order at checkout, for displaying order history
 * and tracking user transactions. Its association with user_id links users to their orders.
 */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
  {
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
        model: 'user',
        key: 'id',
      },
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2), //A number of max. 10 characters, where two are in the decimal places
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, //Applies the current date/time stamp to orders by default
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
