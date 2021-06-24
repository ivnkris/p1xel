const followOnClick = async (event) => {
  const follower_id = event.target.dataset.value;

  console.log("hello");

  console.log(follower_id);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({ follower_id }),
  };

  const response = await fetch(`/api/followers`, options);

  if (response.status !== 200) {
    console.log("Could not create post. Please try again.");
  } else {
    window.location.replace("/followers");
  }
};

$(".user-list-item").click(followOnClick);
