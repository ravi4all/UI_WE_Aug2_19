window.addEventListener("load", initEvent);

var expression = "";

function initEvent() {
    var numbers = document.querySelectorAll(".num");
    var oprs = document.querySelectorAll(".opr");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", appendNumbers);
    }
    for (let i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click", appendOperator);
    }
    document.querySelector("#calculate").addEventListener("click", calc);
}

function appendNumbers() {
    var num = event.srcElement.innerHTML;
    expression += num;
    document.querySelector("#box_1").value = expression;
}

function appendOperator() {
    var num = event.srcElement.innerHTML;
    expression += num;
    document.querySelector("#box_1").value = expression;
}

function calc() {
    var result = eval(expression);
    // console.log(result);
    document.querySelector("#box_1").value = result;
    // console.log(document.querySelector("#box_1").value);
}