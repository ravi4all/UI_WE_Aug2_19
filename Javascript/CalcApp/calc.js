window.addEventListener("load", initEvents);
var f_num;
var s_num;

function initEvents() {
    f_num = document.querySelector("#box_1");
    s_num = document.querySelector("#box_2");
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    // console.log("values are", f_num, s_num);
    document.querySelector("#res").innerHTML = result;
}

function sub() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    // console.log("values are", f_num, s_num);
    document.querySelector("#res").innerHTML = result;
}

function div() {
    var result = parseInt(f_num.value) / parseInt(s_num.value);
    // console.log("values are", f_num, s_num);
    document.querySelector("#res").innerHTML = result;
}

function mul() {
    var result = parseInt(f_num.value) * parseInt(s_num.value);
    // console.log("values are", f_num, s_num);
    document.querySelector("#res").innerHTML = result;
}