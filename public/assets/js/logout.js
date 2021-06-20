const handleClick = async () => {
  console.log("merge");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status !== 200) {
    console.log("Failed Logout");
  } else {
    window.location.replace("/");
  }
};

$("#sign-out-btn").click(handleClick);
