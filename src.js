function login() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    // Simple validation, replace this with proper server-side validation
    if (userId === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your user ID and password.");
    }
}
