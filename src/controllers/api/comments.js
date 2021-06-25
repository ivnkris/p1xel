// importing dependencies
const { User, Game, Rating, Comment } = require("../../models");

// performing CRUD operations on comments in our database
const getAllComments = async (req, res) => {
  try {
    const allCommentsData = await Comment.findAll({
      include: [{ model: Game }, { model: User }],
    });

    return res.status(200).json(allCommentsData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get Comments." });
  }
};

const getCommentById = async (req, res) => {
  try {
    const singleCommentData = await Comment.findByPk(req.params.id, {
      include: [{ model: Game }, { model: User }],
    });

    return res.status(200).json(singleCommentData);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to get Comment." });
  }
};

const addComment = async (req, res) => {
  // Test in Postman with:

  /*
  {
    "title":"comment added via Postman",
    "body": "body of comment added in postman to test endpoint",
    "user_id": "1",
    "game_id": "1"
} */
  try {
    const newComment = await Comment.create(req.body);

    return res.status(200).json(newComment);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to add Comment" });
  }
};

const updateComment = async (req, res) => {
  // Test in Postman with:

  /*
  {
    "title":"UPDATED comment via Postman"
} */
  try {
    const commentToBeUpdated = await Comment.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    return res.status(200).json(commentToBeUpdated);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to update Comment" });
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentToBeDeleted = await Comment.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(commentToBeDeleted);
  } catch (error) {
    console.info(error.message);
    return res.status(500).json({ error: "Failed to delete Comment" });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
};
