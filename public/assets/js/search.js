const getGameData = async (event) => {
  event.preventDefault();

  const searchInput = $("#search-form").val();

  const response = await fetch(`/api/external-data/igdb?${searchInput}`);

  const data = await response.json();

  console.log(data, searchInput);
};

$("#searchBtn").submit(getGameData);

console.log("Hello");
