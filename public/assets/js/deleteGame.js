const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/games/${id}`, options);

  if (response.status !== 200) {
    console.log("Delete failed.");
  } else {
    window.location.replace("/user-games");
  }
};

$('[name="deleteBtn"]').click(onDelete);
