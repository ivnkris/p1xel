// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const authRoutes = require("./auth");
const publicApiRoutes = require("./public-api");
const auth = require("../middleware/auth");

const router = Router();

router.use("/auth", authRoutes);
router.use("/api", auth, apiRoutes);
router.use("/public-api", publicApiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
