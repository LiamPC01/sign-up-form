function checkPassword(form) {
    // alert("checkPassword called");
    password1Field = document.getElementById("password");
    password2Field = document.getElementById("confirmPassword");
    password1 = password1Field.value;
    password2 = password2Field.value;

    if (password1 != password2) {
        password2Field.setCustomValidity("Passwords Do Not Match");
        return false;
    }
    if (password1 == password2) {
        password2Field.setCustomValidity("")
    }
    password2Field.reportValidity();
    

}