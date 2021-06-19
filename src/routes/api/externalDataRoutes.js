const { Router } = require("express");

const getIgdbData = require("../../controllers/api/igdbData");

const router = Router();

router.use("/igdb", getIgdbData);

module.exports = router;
