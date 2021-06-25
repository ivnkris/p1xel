// this allows the user to search for a game and, upon a successful search, will redirect the user to the search-result page, displaying matching titles and their information
const getGameData = async (event) => {
  event.preventDefault();

  try {
    const searchInput = $("#search-form").val();

    window.location.href = `/search-results?search=${searchInput}`;
  } catch (error) {
    console.info({ error: "Could not perform search." });
  }
};

$("#searchBtn").submit(getGameData);
