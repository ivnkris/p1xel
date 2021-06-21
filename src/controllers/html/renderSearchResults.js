const renderSearchResults = (req, res) => {
  const options = {
    layout: "main",
  };
  res.render("search-results", options);
};

module.exports = renderSearchResults;
