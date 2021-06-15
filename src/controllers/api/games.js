const { User, Game, Rating, Comment } = require("../../models");

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
    console.log(error.message);
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
    console.log(error.message);
    return res.status(500).json({ error: "failed to get Game" });
  }
};

const addGame = async (req, res) => {
  // TODO: is_multiplayer NOT Boolean;

  // Post body should look like this:
  /*  {
    "name":"game test post",
    "cover_art": "here there should be a link for cover art",
    "screenshots": "links for screenshots",
    "critic_rating": "10",
    "total_rating": "10",
    "is_multiplayer": "true",
    "release_date": "123456",
    "platform": "12345",
    "genre": "12345",
    "has_game": "true",
    "want_game": "false",
    "user_id": "2"
} */

  try {
    const newGame = await Game.create(req.body);
    res.status(200).json(newGame);
  } catch (error) {
    res.status(500).json({ error: `Failed to post Game` });
  }
};

const updateGame = async (req, res) => {
  // can be tested with this

  /* 
  {
  "name": "game test post UPDATED"
}
*/

  try {
    const gameToBeUpdated = await Game.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).json(gameToBeUpdated);
  } catch (error) {
    res.status(500).json({
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
    res.json(gameToBeDeleted);
  } catch (error) {
    res.status(500).json({
      error: `Failed to delete Post with id of [${req.params.id}]`,
    });
  }
};

module.exports = { getAllGames, getGameById, addGame, updateGame, deleteGame };
