/*
 * This file defines the Review model with the fields id (primary key), user_id (foreign key to the User model),
 * product_id (foreign key to the Product model), comment, and timestamp. Rating could have gone in this table,
 * but we have placed it within the Product.js model.
 * This model is initialized using Sequelize and connected to the database through the sequelize instance.
 * In the big picture, having the Review table enables the display of product reviews, a critical guide for online
 * shoppers. The Review table has links with both User and Product models.
 */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, //Will date/time stamp a review with the current date/time by default
    },
    isVerifiedPurchaser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default to false to allow for creation of a new review instance with this field, and for a case where it still may be appropriate for a non-verified purchaser to leave a review. In most cases (where corresponding orderitem_ids can be found associated with the user leaving the review) the default value will get changed to true by the dynamic logic in the createReview function (in controllers/api/reviewRoutes.js) 
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
