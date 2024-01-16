/*
 * This file configures the connection to the MySQL database using Sequelize. Environment variables give
 * secure storage of database credentials in the .env file which is not tracked on GitHub. When deployed,
 * Heroku's add on JawsDB will assign an URL, but in development the app can use the specified mySQL 
 * configuration. The database connection is established by creating a Sequelize instance which is exported
 * from here and imported by models files and server.js
 */

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
