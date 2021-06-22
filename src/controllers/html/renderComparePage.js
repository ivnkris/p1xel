const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";
const axios = require("axios");

const renderComparePage = async (req, res) => {
  const { steamUsername } = req.session;

  const options = {
    layout: "main",
  };

  const getUserAchievements = async () => {
    const config = {
      method: "get",
      url: `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=730&key=${STEAM_API_KEY}&steamid=${steamUsername}`,
    };

    const response = await axios(config);
    const results = response.data.playerstats.achievements;
    return results;
  };

  const userData = await getUserAchievements();

  const data = {
    userData,
  };

  res.render("compare-page", { options, data });
};

module.exports = renderComparePage;
