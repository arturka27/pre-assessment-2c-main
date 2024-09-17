const { Item } = require("../db/models");

class ItemServices {
  static createItem = async ({
    userId,
    art,
    title,
    description,
    linkToPhoto,
    price,
    quantity
  }) => {
    try {
      const item = await Item.create({
        userId,
        art,
        title,
        description,
        linkToPhoto,
        price,
        quantity
      });
      console.log("Товар создан");
      return item.get();

    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllItems = async (query) => {
    try {
      const items = await Item.findAll({ where: query });
      return items ? items.map((item) => item.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getItemById = async (id) => {
    try {
      const item = await Item.findByPk(id);
      return item ? item.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static updateItem = async (data) => {
    const {
      id,
      userId,
      art,
      title,
      description,
      linkToPhoto,
      price,
      quantity
    } = data;
    const item = await Item.findOne({ where: { id, userId } });
    if (item) {
      return item.update({
        art,
        title,
        description,
        linkToPhoto,
        price,
        quantity
      });
    }
    return null;
  };

  static deleteItem = async (id, userId) => {
    try {
      const item = await Item.destroy({ where: { id, userId } });
      return item;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = ItemServices;