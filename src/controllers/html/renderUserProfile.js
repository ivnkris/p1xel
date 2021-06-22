const STEAM_API_KEY="B56468BAD7D8396DF9B20F6148A9080D"
const axios = require("axios");

const renderUserProfile = async (req, res) => {
const {profilePicture, steamUsername} = req.session

const options = {
    layout: "main",
  };

const getUserData = async () => {
  const config = {
    method: "get",
    url: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamUsername}`, 
  };
  
  const response = await axios(config)
  const results = response.data.response.players[0]
  return results
}

const getRecentlyPlayedGames = async () => {
  const config = {
    method: "get",
    url: `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steamUsername}&format=json`, 
  };
  
  const response = await axios(config)
  const results = response.data.response.games
  return results
}

 const data = {userData: await getUserData(), 
  userPlayedGames: await getRecentlyPlayedGames()}

 console.log(data.userPlayedGames)


  res.render("user-profile", {options, data});
};



module.exports = renderUserProfile;
