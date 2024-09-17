const router = require("express").Router();
const tokensRouter = require("./tokens.routes");
const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const itemsRouter = require("./items.routes");

router.use("/tokens", tokensRouter);
router.use("/items", itemsRouter);
router.use("/auth", authRouter);

// должна быть в конце
router.use("*", errorRouter);

module.exports = router;