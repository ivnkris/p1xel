const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";
const axios = require("axios");
const { User, Followers } = require("../../models");

const renderUserProfile = async (req, res) => {
  try {
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

      const friendsProfiles = await Promise.all(
        results.map(retrieveFriendsInfo)
      );
      return { friendsProfiles, userFriendsSince: results };
    };

    const getAboutMe = async () => {
      const userData = await User.findByPk(userId);
      console.log(userData.about_me);
      return userData.about_me;
    };

    const getFollowers = async () => {
      const followersData = await Followers.findAll({
        where: {
          user_id: userId,
        },
        include: User,
      });
      const formattedFollowersData = followersData.map((follower) =>
        follower.get({ plain: true })
      );
      console.log(formattedFollowersData);
      return formattedFollowersData;
    };

    if (steamUsername) {
      const data = {
        userData: await getUserData(),
        userPlayedGames: await getRecentlyPlayedGames(),
        userFriendsList: await getFriendsList(),
        userAboutMe: await getAboutMe(),
        userFollowers: await getFollowers(),
      };

      res.render("user-profile", { options, data });
    } else {
      const { userId } = req.session;

      const getAboutMe = async () => {
        const userData = await User.findByPk(userId);
        console.log(userData.about_me);
        return userData.about_me;
      };

      const noSteamData = { userAboutMe: await getAboutMe() };
      res.render("user-profile", { noSteamData });
    }
  } catch (error) {
    const { userId } = req.session;

    const getAboutMe = async () => {
      const userData = await User.findByPk(userId);
      console.log(userData.about_me);
      return userData.about_me;
    };

    const noSteamData = { userAboutMe: await getAboutMe() };

    console.error({ error: "Could not find the specified Steam ID" });

    res.render("user-profile", { noSteamData });
  }
};

module.exports = renderUserProfile;
