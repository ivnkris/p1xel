// on click, the targeted user will be stored in the database as a person the current user is following
const followOnClick = async (event) => {
  const follower_id = event.target.dataset.value;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({ follower_id }),
  };

  const response = await fetch(`/api/followers`, options);

  if (response.status !== 200) {
    console.info("Could not create post. Please try again.");
  } else {
    window.location.replace("/followers");
  }
};

$(".user-list-item").click(followOnClick);
