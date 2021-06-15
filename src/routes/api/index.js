const { Router } = require("express");

const gamesRoutes = require("./gamesRoutes");
const usersRoutes = require("./usersRoutes");
const commentsRoutes = require("./commentsRoutes");
const ratingsRoutes = require("./ratingsRoutes");

const router = Router();

router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/comments", commentsRoutes);
router.use("/ratings", ratingsRoutes);

module.exports = router;
