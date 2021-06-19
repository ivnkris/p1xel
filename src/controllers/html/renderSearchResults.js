const renderSearchResults = (req, res) => {
  const options = {
    layout: "main",
  };
  res.render("searchResults", options);
};

module.exports = renderSearchResults;
