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
    console.log("Failed Login");
  } else {
    window.location.replace("/dashboard");
  }

  console.log(req.session);
};

$("#submit-login").submit(handleSubmit);
