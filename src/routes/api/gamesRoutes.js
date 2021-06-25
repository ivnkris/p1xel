// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  deleteGame,
} = require("../../controllers/api/games");

const router = Router();

// different routes that can be accessed
router.get("/", getAllGames);
router.get("/:id", getGameById);
router.post("/", addGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
