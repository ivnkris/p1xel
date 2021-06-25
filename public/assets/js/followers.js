let gameName;

// this will create a query containing the game name chosen by the user and the Steam Id of the follower the user wants to compare stats with. From this query the compare request will take its data.
const onClick = async (event) => {
  const followerId = event.target.dataset.value;

  window.location.replace(
    `/compare-page?followerId=${followerId}&gameName=${gameName}`
  );
};

const getGameName = (event) => {
  gameName = event.target.dataset.value;
};

$(".dropdown-menu").click(getGameName);
$(".compare").click(onClick);
