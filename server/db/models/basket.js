'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({User, Item}) {
      // this.belongsTo(User, {foreignKey: 'userId'})
      // this.hasMany(Item, {foreignKey: 'backetId'})
    }
  }
  Basket.init({
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Users',
    //     key: 'id'
    //   }
    // },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};