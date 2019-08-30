


function onFormRegisterSubmit() {
    let array = [];

    let data = localStorage.getItem("array");
    if (data !== null) {
        if (JSON.parse(data.length) > 1) {
            let oldData = JSON.parse(data)
            array.push(...oldData)
        }
    }
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mname = document.getElementById("mname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("conpassword").value;
    let phoneno = document.getElementById("phoneno").value;

    if (password === confirmPassword) {
        let obj = {
            fname: fname,
            lname: lname,
            mname: mname,
            email: email,
            lname: lname,
            password: password,
            phoneno: phoneno,
            id: Math.random()
        }
        array.push(obj)
        localStorage.setItem("array", JSON.stringify(array));
        window.location.reload();

    }
    else {
        alert("Password and Confirm Password did't matched")
    }

    // window.location.href="./login.html"
}
