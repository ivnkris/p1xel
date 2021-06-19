const { User, Followers } = require("../../models");

const getAllFollowers = async (req, res) => {
  const { id } = req.params;
  try {
    const allFollowersData = await Followers.findAll({
      where: {
        user_id: id,
      },
      include: [{ model: User }],
    });

    return res.status(200).json(allFollowersData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Followers." });
  }
};

const followNewUser = async (req, res) => {
  try {
    const newFollower = await Followers.create(req.body);
    return res.status(200).json(newFollower);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to follow User." });
  }
};

module.exports = {
  getAllFollowers,
  followNewUser,
};
