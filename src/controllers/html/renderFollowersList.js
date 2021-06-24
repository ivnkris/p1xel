const STEAM_API_KEY = "B56468BAD7D8396DF9B20F6148A9080D";
const axios = require("axios");
const { User, Followers } = require("../../models");

const renderFollowersList = async (req, res) => {
  const { steamUsername, userId } = req.session;

  const options = {
    layout: "main",
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

    return formattedFollowersData;
  };

  const data = { userFollowers: await getFollowers() };

  res.render("followers", { options, data });
};

module.exports = renderFollowersList;
