const { Router } = require("express");

const {
  getAllFollowers,
  followNewUser,
  unfollowUser,
} = require("../../controllers/api/followers");

const router = Router();

router.get("/:id", getAllFollowers);
router.post("/", followNewUser);
router.delete("/", unfollowUser);

module.exports = router;
