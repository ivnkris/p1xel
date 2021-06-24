let gameName;

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
