const getGameData = async (event) => {
  event.preventDefault();
  console.log("Hello Again");

  try {
    const searchInput = $("#search-form").val();
    console.log(searchInput);

    // const response = await fetch(`/public-api/igdb?${searchInput}`);

    // const data = await response.json();

    // console.log(data, searchInput);
    window.location.href = `/search-results?search=${searchInput}`;
  } catch (error) {
    console.log(error);
  }
};

$("#searchBtn").submit(getGameData);

console.log("Hello");
