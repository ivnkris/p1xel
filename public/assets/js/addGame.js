// on submit, the game will be added to the "Have Played" or "Want To Play" list.
const onSubmit = async (event) => {
  event.preventDefault();
  let want_game;
  let has_game;

  const form = $(event.currentTarget);

  const buttonType = $(document.activeElement).attr("data-type");

  if (buttonType === "want-to-play") {
    want_game = true;
  } else if (buttonType === "have-played") {
    has_game = true;
  }

  const name = form.find("#gameName").html();
  const cover_art = form.find("#cover").attr("data-type");
  const platform = form.find("#platform").attr("data-type");
  const critic_rating = parseInt(form.find("#criticRating").attr("data-type"));
  const release_date = parseInt(form.find("#releaseDate").attr("data-type"));
  const user_id = parseInt(form[0].dataset.user);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      name,
      want_game,
      has_game,
      cover_art,
      platform,
      critic_rating,
      release_date,
      user_id,
    }),
  };

  const response = await fetch(`/api/games/`, options);

  if (response.status !== 200) {
    console.error(error.message);
  } else {
    console.info("Game successfully added to my games");
  }
};

$('[name="game-form"]').submit(onSubmit);
