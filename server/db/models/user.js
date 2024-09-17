'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Item}) {
      this.hasMany(Item, {foreignKey: 'userId'})
      // this.hasOne(Basket, {foreignKey: 'userId'})
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull:false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    isSeller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};