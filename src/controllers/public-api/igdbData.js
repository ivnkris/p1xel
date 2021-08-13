// importing dependencies
const axios = require("axios");

// handling search request
const getGameData = async (req, res) => {
  const searchInput = req._parsedUrl.query;

  const stringifySearch = decodeURI(searchInput);

  if (searchInput) {
    const data = `fields name, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; search "${stringifySearch}";`;
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

    res.json(response.data);
  } else {
    res.send("Search for your favourite game to see some results");
  }
};

module.exports = getGameData;
