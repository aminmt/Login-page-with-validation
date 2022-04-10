function validate() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (username == "Amin" && password == "12345") {
        alert("Welcome Amin");
        return false;
    } else {
        alert("Username or password is incorrect");
    }

}