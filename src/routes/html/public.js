const { Router } = require("express");

const renderLoginPage = require("../../controllers/html/renderLoginPage");
const renderHomePage = require("../../controllers/html/renderHomePage");
const renderTeamPage = require("../../controllers/html/renderTeamPage");
const renderSignupPage = require("../../controllers/html/renderSignupPage");
const renderGamePage = require("../../controllers/html/renderGamePage");
const renderSearchResults = require("../../controllers/html/renderSearchResults");
const render404 = require("../../controllers/html/render404");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/team", renderTeamPage);
router.get("/signup", renderSignupPage);
router.get("/game/:id", renderGamePage);
router.get("/search-results", renderSearchResults);
router.get("/404", render404);
router.get("/", renderHomePage);

module.exports = router;
