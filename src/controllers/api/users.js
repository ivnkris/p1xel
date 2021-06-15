const { User, Game, Rating, Comment } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const allUsersData = await User.findAll({
      include: [{ model: Comment }, { model: Game }],
    });

    return res.status(200).json(allUsersData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Users." });
  }
};
const getUserById = async (req, res) => {
  try {
    const singleUserData = await User.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: Game }],
    });

    return res.status(200).json(singleUserData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get User." });
  }
};
const addUser = async (req, res) => {
  // Test post method with this:

  /*{
    "steam_id": "1234567",
    "first_name": "Peter",
    "last_name": "parker",
    "username": "peterp",
    "email": "peterp@mail.com",
    "password": "pass",
    "profile_picture": "pictureurl",
    "friends": "list of friends"
}*/

  try {
    const newUser = await User.create(req.body);

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add User" });
  }
};
const updateUser = async (req, res) => {
  // Test post method with this:
  /*{
    "steam_id": "UDPATED 1234567",
    "first_name": "UDPATED Peter"
}*/
  try {
    const userToBeUpdated = await User.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });

    return res.status(200).json(userToBeUpdated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update User" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userToBeDeleted = await User.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(userToBeDeleted);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to delete User" });
  }
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
