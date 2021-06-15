const { Router } = require("express");
const {
  getAllRatings,
  getRatingById,
  addRating,
  updateRating,
  deleteRating,
} = require("../../controllers/api/ratings");

const router = Router();

router.get("/", getAllRatings);
router.get("/:id", getRatingById);
router.post("/", addRating);
router.put("/:id", updateRating);
router.delete("/:id", deleteRating);

module.exports = router;
