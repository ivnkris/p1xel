const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.info("User does not exist");
      return res.status(404).json({ error: "Failed to login" });
    }

    const validPassword = await user.isPasswordValid(password);

    if (!validPassword) {
      return res.status(404).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.email = user.email;
      req.session.firstName = user.first_name;
      req.session.lastName = user.last_name;
      req.session.userId = user.id;
      req.session.steamUsername = user.steam_id;
      req.session.profilePicture = user.profile_picture;
      return res.redirect("/user-profile");
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ data: "Signed Out Successfully!" });
    });
  } else {
    return res.status(500).json({ error: "Failed to sign out" });
  }
};

const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      steamUsername,
      profilePicture,
    } = req.body;

    if (firstName && lastName && username && email && password) {
      await User.create({
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
        steam_id: steamUsername,
        profile_picture: profilePicture,
      });

      return res.status(200).json({ data: "Successfully registered!" });
    }

    return res.status(400).json({ error: "Could not create profile." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Could not create profile." });
  }
};

module.exports = { login, logout, signup };
