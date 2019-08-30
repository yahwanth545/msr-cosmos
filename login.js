
function onFormLoginSubmit() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value
    if (email === "user@gmail.com" && password === "123456") {
        // console.log("login")
        window.location.href = "./dashboard.html";

    }
    else {
        alert("Invalid email or password please try it again")
    }

}

function Register() {
    window.location.href = "./register.html"

}
function Login() {
    window.location.href = "./login.html"

}