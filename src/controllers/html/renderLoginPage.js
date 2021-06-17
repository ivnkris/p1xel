const renderLoginPage = (req, res) => {
  const options = {
    layout: "login",
  };
  res.render("login", options);
};

module.exports = renderLoginPage;
