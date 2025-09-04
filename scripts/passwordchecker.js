const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]/;

function checkPassword(){
    const password1 = document.getElementById("password_field").value;
    const password2 = document.getElementById("reenter_password_field").value;

    if (password1 !== password2) {
        showCustomPopup("Passwords are not matching")
        return;
    }

    if(password1.length < 8){
        showCustomPopup("Password too short, needs to be at least 8 characters");
        return;
    }

    if(password1.length > 15){
        showCustomPopup("Password too long, needs to be less than 15 characters");
        return;
    }

    if(!regex.test(password1)){
        showCustomPopup("Password needs at least 1 uppercase symbol, 1 lowercase symbol and 1 unique symbol")
    }

    showCustomPopup("PASSWORD IS VALID");

}