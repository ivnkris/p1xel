// importing axios
const axios = require("axios");

// importing dev created dependencies
const { Game, User } = require("../../models");

// rendering homepage. if data is not available, an error message will be thrown
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
        Authorization: "Bearer t7i5em989475nbc96qusz36uvs1vmu",
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);

    const topResults = response.data;

    const getUsers = async () => {
      const usersData = await User.findAll();
      const formattedUsersData = usersData.map((user) =>
        user.get({ plain: true })
      );

      return formattedUsersData;
    };

    // user data will be brought in if user is logged in
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

      const { userId } = req.session;

      const games = await Game.findAll({
        where: { user_id: userId },
      });

      const formatGames = games.map((game) => game.get({ plain: true }));

      const dataObject = {
        games: formatGames,
        gameData: formattedGameData,
        userData: formattedUserData,
        topResults,
        isLoggedIn: req.session.isLoggedIn,
        users: await getUsers(),
      };

      return res.render("homepage", dataObject);
    } else {
      // if user is not logged in, page will be rendered with limited, non-specific data
      const dataObject = {
        topResults,
        isLoggedIn: req.session.isLoggedIn,
        users: await getUsers(),
      };

      return res.render("homepage", dataObject);
    }
  } catch (error) {
    console.info(`[ERROR] - ${error.message}`);

    res.status(500).json({ error: "Failed to render homepage" });
  }
};
module.exports = renderHomePage;
