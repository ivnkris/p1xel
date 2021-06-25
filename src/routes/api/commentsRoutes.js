// importing dependencies
const { Router } = require("express");

// importing user created dependencies
const {
  getAllComments,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comments");

const router = Router();

// different routes that can be accessed
router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
