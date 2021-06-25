// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const { login, logout, signup } = require("../../controllers/auth");

const router = Router();

// authentication routes that can be accessed
router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);

module.exports = router;
