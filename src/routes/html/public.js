const { Router } = require("express");

const renderLoginPage = require("../../controllers/html/renderLoginPage");
const renderHomePage = require("../../controllers/html/renderHomePage");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

module.exports = router;
