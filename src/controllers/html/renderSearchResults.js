const axios = require("axios");

const renderSearchResults = async (req, res) => {
  const options = {
    layout: "main",
  };
  const searchInput = req.query.search;

  const stringifySearch = decodeURI(searchInput);

  if (searchInput) {
    const data = `fields name, summary, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; search "${stringifySearch}";`;
    const config = {
      method: "post",
      url: "https://api.igdb.com/v4/games",
      headers: {
        "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
        Authorization: "Bearer zzrepo6q4zb5jvw5jxqswmpgc6ef0s",
        "Content-Type": "application/json",
      },
      data,
    };
    const response = await axios(config);

    const results = response.data;

    return res.render("search-results", { options, results });
  } else {
    const results = null;
    return res.render("search-results", { options, results });
  }
};

module.exports = renderSearchResults;
