const { Game, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    if (req.session.isLoggedIn) {
      const gameData = await Game.findAll({
        where: {
          user_id: req.session.userId,
        },
      });
      const userData = await User.findAll({
        where: {
          id: req.session.userId,
        },
      });
      const formattedGameData = gameData.map((game) =>
        game.get({ plain: true })
      );
      const formattedUserData = userData.map((user) =>
        user.get({ plain: true })
      );
      const dataObject = {
        gameData: formattedGameData,
        userData: formattedUserData,
      };
      return res.render("homepage", { homepageData: dataObject });
    } else {
      return res.render("homepage");
    }
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};
module.exports = renderHomePage;
