// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const getIgdbData = require("../../controllers/public-api/igdbData");

const router = Router();

router.use("/igdb", getIgdbData);

module.exports = router;
