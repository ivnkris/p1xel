// importing dependencies
const { User, Followers } = require("../../models");

// this will render the followers list. if no data is present, page will be rendered without any data
const renderFollowersList = async (req, res) => {
  const { userId } = req.session;

  const options = {
    layout: "main",
  };

  try {
    // this will retrieve current users followers from the database
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
  } catch (error) {
    console.info("hit here");

    res.render("followers");
  }
};

module.exports = renderFollowersList;
