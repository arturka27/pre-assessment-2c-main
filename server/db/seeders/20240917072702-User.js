"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          "name": "Иван Иванов",
          "email": "ivan.ivanov@example.com",
          "password": "password123",
          "isSeller": true
        },
        {
          "name": "Мария Петрова",
          "email": "maria.petrova@example.com",
          "password": "mypassword",
          "isSeller": false
        },
        {
          "name": "Сергей Смирнов",
          "email": "sergey.smirnov@example.com",
          "password": "securepass",
          "isSeller": true
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Users', null, {});
  },
};
