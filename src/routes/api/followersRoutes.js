const { Router } = require("express");

const {
  getAllFollowers,
  followNewUser,
} = require("../../controllers/api/followers");

const router = Router();

router.get("/:id", getAllFollowers);
router.post("/", followNewUser);

module.exports = router;
