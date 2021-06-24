const { Game } = require("../../models");

const renderUserGames = async (req, res) => {
  try {
    const { userId } = req.session;
    const games = await Game.findAll({
      where: { user_id: userId },
    });
    const formatGames = games.map((game) => game.get({ plain: true }));

    res.render("user-games", { games: formatGames });
  } catch (error) {
    console.error({ error: "Could not render User Games page." });
  }
};

module.exports = renderUserGames;
