// checks if user is logged in. If he is, private routes can be accessed, else he will be rideirected to the login page
const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
