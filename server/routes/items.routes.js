const router = require("express").Router();
const ItemServices = require("../services/Item.services");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const generateRandomSKU = require("../utils/skuUtils");

router.get("/", async (req, res) => {
  try {
    const items = await ItemServices.getAllItems(req.query);
    res.status(200).json({ message: "success", items });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await ItemServices.getItemById(id);

    res.status(200).json({ message: "success", item });
    return;
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {

    const userId = res.locals.user.id;
    const { title, description, linkToPhoto,  price, quantity } = req.body;

    const item = await ItemServices.createItem({
      userId,
      art: generateRandomSKU(8),
      title,
      description,
      linkToPhoto,
      price: +price,
      quantity: +quantity,
    });

    res.status(201).json({ message: "success", item });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { id } = req.params;
    const { title, description, linkToPhoto, price, quantity } = req.body;

    let item = await ItemServices.getItemById(+id);

    if (item) {
      item = await ItemServices.updateItem({
        id: +id,
        userId,
        title,
        description,
        linkToPhoto,
        price,
        quantity,
      });

      res.status(200).json({ message: "success", item });
      return;
    }
    res.status(400).json({ message: "Item is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;
    let item = await ItemServices.getItemById(id);
    if (item) {
      item = await ItemServices.deleteItem(id, userId);
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Item is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
