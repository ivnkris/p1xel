// when the delete button is clicked, the game will be removed from the list it`s in ("Have Played" or "Want To Play")
const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/games/${id}`, options);

  if (response.status !== 200) {
    console.info("Delete failed.");
  } else {
    window.location.replace("/user-games");
  }
};

$('[name="deleteBtn"]').click(onDelete);
