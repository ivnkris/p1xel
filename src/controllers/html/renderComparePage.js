const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";
const axios = require("axios");

const renderComparePage = async (req, res) => {
  const { steamUsername } = req.session;

  const { followerId, gameName } = req.query;

  const options = {
    layout: "main",
  };

  try {
    const getUserAchievements = async () => {
      const config = {
        method: "get",
        url: `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameName}&key=${STEAM_API_KEY}&steamid=${steamUsername}`,
      };

      const response = await axios(config);
      const results = response.data.playerstats.achievements;
      return results;
    };

    const getFollowerAchievements = async () => {
      const config = {
        method: "get",
        url: `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameName}&key=${STEAM_API_KEY}&steamid=${followerId}`,
      };

      const response = await axios(config);
      const results = response.data.playerstats.achievements;
      return results;
    };

    const userData = await getUserAchievements();
    const followerData = await getFollowerAchievements();

    const data = {
      userData,
      followerData,
    };

    res.render("compare-page", { options, data });
  } catch (error) {
    console.error({ error: "Missing Data" });
    res.render("compare-page");
  }
};

module.exports = renderComparePage;
