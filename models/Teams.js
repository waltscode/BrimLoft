const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Teams extends Model {}

Teams.init(
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
        },

        league_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'league',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teams',
    }
    );

module.exports = Teams;