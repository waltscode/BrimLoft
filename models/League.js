const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class League extends Model {}

League.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    league_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    league_logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // Include the sequelize connection
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'league',
  }
);

module.exports = League;
