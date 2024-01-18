/*
 * This file defines the NHLTeam model, which represents NHL teams with fields id (primary key) and team_name.
 * The model is initialized using Sequelize and connected to the database through the sequelize instance.
 * This table associates specific NHL teams with the "NHL Logo" tag. It is another layer of product-option down from basics-baseball hall-NHL logo-NHL Team
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NHLTeam extends Model {}

NHLTeam.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team_logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'NHL_team',
  }
);

module.exports = NHLTeam;