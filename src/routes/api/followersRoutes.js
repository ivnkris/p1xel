// importing dependencies
const { Router } = require("express");

// impoting dev created dependencies
const {
  getAllFollowers,
  followNewUser,
  unfollowUser,
} = require("../../controllers/api/followers");

const router = Router();

// different routes that cad be accessed
router.get("/:id", getAllFollowers);
router.post("/", followNewUser);
router.delete("/", unfollowUser);

module.exports = router;
