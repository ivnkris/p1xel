const { Router } = require("express");

const gamesRoutes = require("./gamesRoutes");
const usersRoutes = require("./usersRoutes");
const commentsRoutes = require("./commentsRoutes");
const ratingsRoutes = require("./ratingsRoutes");
const externalDataRoutes = require("./externalDataRoutes");

const router = Router();

router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/comments", commentsRoutes);
router.use("/ratings", ratingsRoutes);
router.use("/external-data", externalDataRoutes);

module.exports = router;
