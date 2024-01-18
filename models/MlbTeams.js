const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MlbTeams extends Model {}

MlbTeams.init(
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mlb_teams',
    }
    );

module.exports = MlbTeams;