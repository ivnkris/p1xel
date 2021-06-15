const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.send("please login")
  }
}

module.exports = auth;