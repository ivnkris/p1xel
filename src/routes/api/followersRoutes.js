const { Router } = require("express");

const { getAllFollowers } = require("../../controllers/api/followers");

const router = Router();

router.get("/:id", getAllFollowers);

module.exports = router;
