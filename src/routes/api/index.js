const { Router } = require("express");

const gamesRoutes = require("./gamesRoutes");
const usersRoutes = require("./usersRoutes");
const commentsRoutes = require("./commentsRoutes");
const ratingsRoutes = require("./ratingsRoutes");
const followersRoutes = require("./followersRoutes");

const router = Router();

router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/comments", commentsRoutes);
router.use("/ratings", ratingsRoutes);
router.use("/followers", followersRoutes);

module.exports = router;
