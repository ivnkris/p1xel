const { Router } = require("express");

const renderUserProfile = require("../../controllers/html/renderUserProfile");
const renderChatRoomPage = require("../../controllers/html/renderChatRoomPage");
const renderFollowersList = require("../../controllers/html/renderFollowersList");
const renderUserGames = require("../../controllers/html/renderUserGames");
const renderComparePage = require("../../controllers/html/renderComparePage");

const router = Router();

router.get("/user-profile", renderUserProfile);
router.get("/chat-room", renderChatRoomPage);
router.get("/followers", renderFollowersList);
router.get("/user-games", renderUserGames);
router.get("/compare-page", renderComparePage);

module.exports = router;
