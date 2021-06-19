const axios = require("axios");

const getGameData = async () => {
  const data =
    'fields name, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; search "Breath of the Wild";';
  const config = {
    method: "post",
    url: "https://api.igdb.com/v4/games",
    headers: {
      "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
      Authorization: "Bearer zzrepo6q4zb5jvw5jxqswmpgc6ef0s",
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config);
  console.log(response.data);
};

module.exports = getGameData;
