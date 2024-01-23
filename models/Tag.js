const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns CORRESPONDING TO THE TAG SEEDED DATA tag_name: 'rock music
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name:{  
    type: DataTypes.STRING,
      allowNull: false,
    },
    price_adjustment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false, //set to false by default but will be dynamically updated if the user chooses an item which has a value for this field in its tag eg. the customization options (see tag-seeds.js). Front end logic will have to fetch associated tags and their price adjustment for order items and use this when dynamically updating price displayed on the front end and calculated as price in OrderItem model.
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;