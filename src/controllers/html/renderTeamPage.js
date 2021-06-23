const renderTeamPage = (req, res) => {
  const {isLoggedIn} = req.session.isLoggedIn;
  res.render("team-page", isLoggedIn);
};

module.exports = renderTeamPage;
