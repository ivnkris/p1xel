// this will make a post request to the specified endpoint,logging out the user and deleting their session from the database
const handleClick = async () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status !== 200) {
    console.info("Failed Logout");
  } else {
    window.location.replace("/");
  }
};

$("#sign-out-btn").click(handleClick);
