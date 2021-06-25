// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
