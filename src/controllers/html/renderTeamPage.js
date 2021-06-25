// renders team page
const renderTeamPage = (req, res) => {
  const { isLoggedIn } = req.session;
  res.render("team-page", { isLoggedIn });
};

module.exports = renderTeamPage;
