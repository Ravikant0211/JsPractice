function validation() {
    const user = document.getElementById("username").value;

    if(user === "") {
        document.getElementById("userError").innerHTML = "Please fill the username field";
        // return false;
    }
}