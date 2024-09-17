'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {

    static associate({User}) {
      this.belongsTo(User, {foreignKey:'userId'})
      // this.belongsTo(Basket, {foreignKey:'basketId'})
    }
  }
  Item.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    // basketId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Baskets',
    //     key: 'id'
    //   },
    //   defaultValue: null,
    // },
    art: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    linkToPhoto: {
      type: DataTypes.TEXT,
      defaultValue: 'https://via.placeholder.com/120x100/'
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};