const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NhlTeams extends Model {}

NhlTeams.init(
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
        underscoreed: true,
        modelName: 'nhl_teams',
    }
    );

module.exports = NhlTeams;