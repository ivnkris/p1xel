const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";
const axios = require("axios");
const User = require("../../models/User");

const renderUserProfile = async (req, res) => {
  const { steamUsername, userId } = req.session;

  const options = {
    layout: "main",
  };

  const getUserData = async () => {
    const config = {
      method: "get",
      url: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamUsername}`,
    };

    const response = await axios(config);
    const results = response.data.response.players[0];
    return results;
  };

  const getRecentlyPlayedGames = async () => {
    const config = {
      method: "get",
      url: `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steamUsername}&format=json`,
    };

    const response = await axios(config);
    const results = response.data.response.games;
    return results;
  };

  const getFriendsList = async () => {
    const config = {
      method: "get",
      url: `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${STEAM_API_KEY}&steamid=${steamUsername}&relationship=friend`,
    };

    const response = await axios(config);
    const results = response.data.friendslist.friends;

    const retrieveFriendsInfo = async (friend) => {
      const config = {
        method: "get",
        url: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${friend.steamid}`,
      };

      const response = await axios(config);
      const results = response.data.response.players[0];
      return results;
    };

    const friendsProfiles = await Promise.all(results.map(retrieveFriendsInfo));
    return { friendsProfiles, userFriendsSince: results };
  };

  const getAboutMe = async () => {
    const userData = await User.findByPk(userId);
    console.log(userData.about_me);
    return userData.about_me;
  };

  if (steamUsername) {
    const data = {
      userData: await getUserData(),
      userPlayedGames: await getRecentlyPlayedGames(),
      userFriendsList: await getFriendsList(),
      userAboutMe: await getAboutMe(),
    };

    res.render("user-profile", { options, data });
  } else {
    res.render("user-profile");
  }
};

module.exports = renderUserProfile;
