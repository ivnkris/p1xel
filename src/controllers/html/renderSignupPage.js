const renderSignupPage = (req, res) => {
  const options = {
    layout: "signup",
  };
  res.render("signup", options);
};

module.exports = renderSignupPage;
