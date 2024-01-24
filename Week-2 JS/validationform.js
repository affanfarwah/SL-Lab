function formValidator(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var addr = document.getElementById("addr");
    var mobileno = document.getElementById("mobileno");
    var gender = document.getElementById("gender");

    if (notEmpty(firstname, "cannot be null")) {
        if (isAlphabet(firstname, "Please enter only letters for your Firstname")) {
            if (lengthRestriction(firstname, 6)) {
                if (isAlphabet(lastname, "Please enter only letters for your Lastname")) {
                    if (emailValidator(email, "please enter a valid email address")) {
                        if (lengthRestriction(pass, 6)) {
                            if (isAlphanumeric(pass, "Please enter Numbers and Letters Only for password")) {
                                if (notEmpty(addr, "please enter the address")) {
                                    if (isNumeric(mobileno, 10, 10)) {
                                        if (ismarked()) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function notEmpty(elem, helperMsg) {
    if (elem.value.length == 0) {
        alert(helperMsg);
        elem.focus();
    }
    return true;
}
function isNumeric(elem, helperMsg) {
    var numericExpression = /^[0-9]+$/; if (elem.value.match(numericExpression)) {
        return true;
    }
    else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    }
    else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
function isAlphanumeric(elem, helperMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        alert(helperMsg); elem.focus(); return false;
    }
}
function lengthRestriction(elem, min) {
    var uInput = elem.value; if (uInput.length >= min) {
        return true;
    } else {
        alert("Please enter minimum " + min + " characters"); elem.focus();
        return false;
    }
}
function emailValidator(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}
function lengthRestriction1(elem, min, max) {
    var uInput = elem.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    }
    else {
        alert("Please enter minimum " + min + " characters for password"); elem.focus();
    }
}