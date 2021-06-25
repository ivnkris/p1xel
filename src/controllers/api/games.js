// importing dependencies
const { User, Game, Rating, Comment } = require("../../models");

// performing CRUD operations on games in our database
const getAllGames = async (req, res) => {
  try {
    const allGamesData = await Game.findAll({
      include: [
        {
          model: Comment,
          attributes: ["body", "created_at"],
          include: [{ model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
      ],
    });

    return res.status(200).json(allGamesData);
  } catch (error) {
    console.info(error.message);

    return res.status(500).json({ error: "failed to get Games" });
  }
};

const getGameById = async (req, res) => {
  try {
    const singleGameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["body", "created_at"],
          include: [{ model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
      ],
    });

    return res.status(200).json(singleGameData);
  } catch (error) {
    console.info(error.message);

    return res.status(500).json({ error: "failed to get Game" });
  }
};

const addGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);

    return res.status(200).json(newGame);
  } catch (error) {
    console.info(error.message);

    return res.status(500).json({ error: `Failed to post Game` });
  }
};

const updateGame = async (req, res) => {
  try {
    const gameToBeUpdated = await Game.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });

    return res.status(200).json(gameToBeUpdated);
  } catch (error) {
    console.info(error.message);

    return res.status(500).json({
      error: `Failed to update Game with id of [${req.params.id}]`,
    });
  }
};

const deleteGame = async (req, res) => {
  try {
    const gameToBeDeleted = await Game.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(gameToBeDeleted);
  } catch (error) {
    console.info(error.message);

    return res.status(500).json({
      error: `Failed to delete Game with id of [${req.params.id}]`,
    });
  }
};

module.exports = { getAllGames, getGameById, addGame, updateGame, deleteGame };
