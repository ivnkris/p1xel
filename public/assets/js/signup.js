// when the sign up form is submitted, this will check if all of the necessary fields are completed and, if this is the case, will perform a post request tot he specified endpoint, adding the credentials to our database. Upon successful sign up. the user will be redirected to the login page
const handleSubmit = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const steamUsername = $("#steamUsername").val();
  const aboutMe = $("#aboutMe").val();

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
      aboutMe,
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
      console.info("Failed Sign Up");
    } else {
      window.location.replace("/login");
    }
    console.info("Successfully registered!");
  } else {
    $("#signup-alert").text("Your passwords do not match!");
  }
};

$("#submit-signup").submit(handleSubmit);
