'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      // basketId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Baskets',
      //     key: 'id'
      //   },
      //   defaultValue: null,
      // },
      art: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      linkToPhoto: {
        type: Sequelize.TEXT,
        defaultValue: 'https://via.placeholder.com/120x100/'
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};