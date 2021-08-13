// importing dependencies
const axios = require("axios");

// renders search results page with required data
const renderSearchResults = async (req, res) => {
  const options = {
    layout: "main",
  };

  const { isLoggedIn } = req.session;

  const searchInput = req.query.search;

  const stringifySearch = decodeURI(searchInput);

  if (searchInput) {
    const data = `fields name, summary, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; limit 80; search "${stringifySearch}";`;
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

    if (results.length > 0) {
      results.forEach((each) => {
        each.userId = req.session.userId;
      });

      return res.render("search-results", { options, results, isLoggedIn });
    } else {
      results.emptySearch = true;

      return res.render("search-results", { options, results, isLoggedIn });
    }
  } else {
    const results = {};

    results.emptySearch = true;

    return res.render("search-results", { options, results, isLoggedIn });
  }
};

module.exports = renderSearchResults;
