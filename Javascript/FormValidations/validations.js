window.addEventListener("load", initEvents);
var username;
var email;
var pwd;
var cpwd;
var span;
var file;
var strength;
var image;
var form;

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    image = document.querySelector("#image");
    file = document.querySelector("#pic");
    form = document.querySelector("#form");

    form.addEventListener("submit", submitForm);

    file.addEventListener("change", uploadPic);
    username.addEventListener("blur", checkBlank);
    email.addEventListener("keyup", validateEmail);
    pwd.addEventListener("keyup", passwordStrength);
    span = document.querySelectorAll(".error");
    strength = document.querySelector(".progress");
}

function submitForm() {
    checkBlank();
    event.preventDefault();
}

function uploadPic() {
    // console.log(file.files);
    filename = file.files[0].name;
    imgSrc = "../../images/" + filename;
    image.src = imgSrc;
}

function checkBlank() {
    var str = username.value;
    // if (!str) {
    //     span[0].innerHTML = "Please fill this field";
    // } else {
    //     span[0].innerHTML = "";
    // }
    if (isEmpty(str)) {
        span[0].innerHTML = "Please fill this field";
    } else {
        span[0].innerHTML = "";
    }
}

function isEmpty(str) {
    return (str === undefined || str.length == 0 || str == NaN || str == "") ? true : false;
}

function validateEmail() {
    var str = email.value;
    var pattern = /([a-z|0-9]\w+[@]\w+[.]\w{2,4})/;
    console.log(pattern.test(str))
    if (pattern.test(str)) {
        span[1].innerHTML = "Valid";
    } else {
        span[1].innerHTML = "InValid";
    }
}

function passwordStrength() {
    var str = pwd.value;
    if (str.length == 0) {
        span[2].innerHTML = "Please fill Password";
        strength.style.width = '0px';
    } else if (str.length >= 1 && str.length < 5) {
        span[2].innerHTML = "Weak Password";
        strength.style.width = '80px';
        strength.style.backgroundColor = 'red';
    } else if (str.length >= 5 && str.length < 8) {
        span[2].innerHTML = "Average Password";
        strength.style.width = '150px';
        strength.style.backgroundColor = 'yellow';
    } else if (str.length >= 8) {
        span[2].innerHTML = "Strong Password";
        strength.style.width = '200px';
        strength.style.backgroundColor = 'green';
    }
}