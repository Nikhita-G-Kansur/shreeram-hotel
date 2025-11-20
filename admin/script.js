document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const correctUser = "nn";   // your chosen username
    const correctPass = "1234";    // your chosen password

    if (username === correctUser && password === correctPass) {
        sessionStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password");
    }
});
