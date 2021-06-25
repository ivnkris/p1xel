// importing axios
const axios = require("axios");

// declaring our steam api key variable
const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";

// renders compare page
const renderComparePage = async (req, res) => {
  const { steamUsername } = req.session;

  const { followerId, gameName } = req.query;

  const options = {
    layout: "main",
  };

  try {
    // this will get the user achievements
    const getUserAchievements = async () => {
      const config = {
        method: "get",
        url: `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameName}&key=${STEAM_API_KEY}&steamid=${steamUsername}`,
      };

      const response = await axios(config);
      const results = response.data.playerstats.achievements;
      return results;
    };

    // this will get the chosen follower achievements
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

    // data object containing the user and follower information
    const data = {
      userData,
      followerData,
    };

    // if all of the data is present, the page will be rendered with the data object so the info can be displayed
    res.render("compare-page", { options, data });
  } catch (error) {
    // if data is missing, the page will be rendered without the data. A message will be displayed informing the user that the comparison could not be done because of missing data for either the user or the follower
    console.error({ error: "Missing Data" });
    res.render("compare-page");
  }
};

module.exports = renderComparePage;
