// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const {
  getAllRatings,
  getRatingById,
  addRating,
  updateRating,
  deleteRating,
} = require("../../controllers/api/ratings");

const router = Router();

// different routes that can be accessed
router.get("/", getAllRatings);
router.get("/:id", getRatingById);
router.post("/", addRating);
router.put("/:id", updateRating);
router.delete("/:id", deleteRating);

module.exports = router;
