document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "nn" && password === "1234") {
    alert("Login Successful!");
    window.location.href = "admin.html";
  } else {
    alert("Invalid Username or Password");
  }
});
