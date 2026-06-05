function showMessage() {
    alert("Hello Students! Welcome to GitHub Branching");
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Credentials!";
    }
}