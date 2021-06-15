const { User, Game, Rating, Comment } = require("../../models");

const getAllRatings = async (req, res) => {
  try {
    const allRatingsData = await Rating.findAll({
      include: [{ model: Game }, { model: User }],
    });

    return res.status(200).json(allRatingsData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Ratings." });
  }
};
const getRatingById = async (req, res) => {
  try {
    const singleRatingData = await Rating.findByPk(req.params.id, {
      include: [{ model: Game }, { model: User }],
    });

    return res.status(200).json(singleRatingData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Rating." });
  }
};
const addRating = async (req, res) => {
  // Test with:

  /*{
    "rating": 7,
    "user_id": 1,
    "game_id": 1
} */

  try {
    const newRating = await Rating.create(req.body);

    return res.status(200).json(newRating);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add Rating" });
  }
};
const updateRating = async (req, res) => {
  try {
    const ratingToBeUpdated = await Rating.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });

    return res.status(200).json(ratingToBeUpdated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update Rating" });
  }
};
const deleteRating = async (req, res) => {
  // Test with:

  /*{
    "rating": 5
} */
  try {
    const ratingToBeDeleted = await Rating.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(ratingToBeDeleted);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to delete Rating" });
  }
};

module.exports = {
  getAllRatings,
  getRatingById,
  addRating,
  updateRating,
  deleteRating,
};
