'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Users',
      //     key: 'id'
      //   }
      // },
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
    await queryInterface.dropTable('Baskets');
  }
};