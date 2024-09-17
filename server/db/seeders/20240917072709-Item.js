"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          "userId": 1,
          "art": "ART001",
          "title": "Абстрактный шедевр",
          "description": "Яркая картина, которая украсит ваш интерьер.",
          "linkToPhoto": "https://img.freepik.com/free-photo/overloaded-cake-with-flowers_23-2150996546.jpg",
          "price": 1500,
          "quantity": 5
        },
        {
          "userId": 2,
          "art": "ART002",
          "title": "Деревянная красота",
          "description": "Уникальная скульптура, выполненная вручную.",
          "linkToPhoto": "https://static.tildacdn.com/tild3063-3736-4765-a232-396530363037/_.jpg",
          "price": 3000,
          "quantity": 2
        },
        {
          "userId": 3,
          "art": "ART003",
          "title": "Природа в кадре",
          "description": "Чудесная фотография, запечатлевшая красоту природы.",
          "linkToPhoto": "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
          "price": 800,
          "quantity": 10
        },
        {
          "userId": 1,
          "art": "ART004",
          "title": "Контраст",
          "description": "Элегантная графика, которая привлечет внимание.",
          "linkToPhoto": "https://freelance.today/uploads/images/00/07/43/2017/03/15/f432d6.jpg",
          "price": 1200,
          "quantity": 3
        },
        {
          "userId": 2,
          "art": "ART005",
          "title": "Искусство керамики",
          "description": "Ручная работа, идеальна для декора.",
          "linkToPhoto": "https://api.vladey.net/storage/content/pictures/1850/%D0%BA%D0%BE%D0%BB%D0%BB%D0%B0%D0%B6.jpg",
          "price": 600,
          "quantity": 7
        },
        {
          "userId": 3,
          "art": "ART006",
          "title": "Цвета жизни",
          "description": "Живопись, полная энергии и жизни.",
          "linkToPhoto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NNwJ5lA9ILHOMNIRtrLvCEAq5w0x4MfKRA&s",
          "price": 2000,
          "quantity": 4
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
