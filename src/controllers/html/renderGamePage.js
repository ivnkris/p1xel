// importing dependencies
const axios = require("axios");

// this will render the game page with required information.
const renderGamePage = async (req, res) => {
  const options = {
    layout: "main",
  };
  const { id: gameId } = req.params;

  const { isLoggedIn } = req.session;

  const data = `fields name, summary, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; where id =${gameId};`;

  const config = {
    method: "post",
    url: "https://api.igdb.com/v4/games",
    headers: {
      "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
      Authorization: "Bearer t7i5em989475nbc96qusz36uvs1vmu",
      "Content-Type": "application/json",
    },
    data,
  };

  const response = await axios(config);

  const results = response.data;

  const game = results[0];

  return res.render("games", { options, game, isLoggedIn });
};

module.exports = renderGamePage;
