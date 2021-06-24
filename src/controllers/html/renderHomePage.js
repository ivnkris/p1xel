const axios = require("axios");
const { Game, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    const data = `fields name,rating, cover.url;
    sort rating desc;
    where rating != null;`;
    const config = {
      method: "post",
      url: "https://api.igdb.com/v4/games",
      headers: {
        "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
        Authorization: "Bearer zzrepo6q4zb5jvw5jxqswmpgc6ef0s",
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);

    const topResults = response.data;

    console.log(req.session);
    const { userId } = req.session;
    const games = await Game.findAll({
      where: { user_id: userId },
    });
    console.log(games);
    const formatGames = games.map((game) => game.get({ plain: true }));

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
        games: formatGames,
        gameData: formattedGameData,
        userData: formattedUserData,
        topResults,
        isLoggedIn: req.session.isLoggedIn,
      };
      return res.render("homepage", dataObject);
    } else {
      const dataObject = {
        topResults,
        isLoggedIn: req.session.isLoggedIn,
      };

      return res.render("homepage", dataObject);
    }
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};
module.exports = renderHomePage;
