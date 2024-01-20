/*
 * This file defines the User model (database table relating to users).
 * Table columns will be: id, username, email, password (hashed), and default_address.
 * Additionally, it provides methods for password validation during login, relying on bcrypt for hashing
 * Hooks interpose to hash passwords before creating or updating them in the database.
 * The checkPassword method allows for secure password verification during login.
 * Constraints insist usernames and emails are unique, inputs in the email field really are emails and 
 * passwords are between 8 and 20 characters
 * In the big picture having this table will enable user authentication and authorization, and secure storage of user information
 * User_id is used in other tables (orders and reviews)
 */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  //Checks whether the password the user has entered matches the password given at signup (hashed to hashed comparison)
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,20],
      },
    },
    default_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10); // Hash password before saving
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10); // Hash password before newly updated password is put in the database
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
