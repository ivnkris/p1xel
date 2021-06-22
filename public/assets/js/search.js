const getGameData = async (event) => {
  event.preventDefault();

  try {
    const searchInput = $("#search-form").val();

    window.location.href = `/search-results?search=${searchInput}`;
  } catch (error) {
    console.log(error);
  }
};

$("#searchBtn").submit(getGameData);
