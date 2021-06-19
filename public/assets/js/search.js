const getGameData = async (event) => {
  event.preventDefault();

  try {
    const searchInput = $("#search-form").val();
    console.log(searchInput);

    const response = await fetch(`/api/external-data/igdb?${searchInput}`);

    const data = await response.json();

    console.log(data, searchInput);
  } catch (error) {
    console.log(error);
  }
};

$("#searchBtn").submit(getGameData);

console.log("Hello");
