const { Router } = require("express");

const gamesRoutes = require("./gamesRoutes");
const usersRoutes = require("./usersRoutes");
const commentsRoutes = require("./commentsRoutes");
const ratingsRoutes = require("./ratingsRoutes");
const externalDataRoutes = require("./externalDataRoutes");
const followersRoutes = require("./followersRoutes");

const router = Router();

router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/comments", commentsRoutes);
router.use("/ratings", ratingsRoutes);
// router.use("/external-data", externalDataRoutes);
router.use("/external-data", () => {
  console.log("here");
});
router.use("/followers", followersRoutes);

module.exports = router;
