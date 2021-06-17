const handleSubmit = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const steamUsername = $("#steamUsername").val();
  const profilePicture = $("#profilePicture").val();

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password,
      steamUsername,
      profilePicture,
    }),
  };

  if (!firstName || !lastName || !username || !password || !confirmPassword) {
    $("#signup-alert").text(
      "Please make sure all fields are filled correctly!"
    );
    return;
  }
  if (password === confirmPassword) {
    const response = await fetch("/auth/signup", options);

    if (response.status !== 200) {
      console.log("Failed Sign Up");
    } else {
      window.location.replace("/login");
    }
    console.log("Successfully registered!");
  } else {
    $("#signup-alert").text("Your passwords do not match!");
  }

  console.log("hi");
};

$("#submit-signup").submit(handleSubmit);
