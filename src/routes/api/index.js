const { Router } = require("express");

const gamesRoutes = require("./gamesRoutes");

const router = Router();

router.use("/games", gamesRoutes);

module.exports = router;
