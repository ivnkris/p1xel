const { Game } = require("../../models");

const renderUserGames = async (req, res) => {
  try {
    console.log(req.session);
    const { userId } = req.session;
    const games = await Game.findAll({
      where: { user_id: userId },
    });
    console.log(games);
    const formatGames = games.map((game) => game.get({ plain: true }));
    res.render("user-games", { games: formatGames });
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderUserGames;
