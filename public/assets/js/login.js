// this will compare the user credentials on the login page and if the credentials meet with the information in the database, the user will be able to access private routes
const handleSubmit = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch("/auth/login", options);

  if (response.status !== 200) {
    $("#login-alert").text(
      "Your email or password is incorrect. Please verify your credentials and try again!"
    );
    console.info("Failed Login");
  } else {
    window.location.replace("/user-profile");
  }
};

$("#submit-login").submit(handleSubmit);
