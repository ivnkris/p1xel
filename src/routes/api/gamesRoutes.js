const { Router } = require("express");

const {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
} = require("../../controllers/api/games");

const router = Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);
router.post("/", addGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
