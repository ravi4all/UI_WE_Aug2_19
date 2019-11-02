// window.addEventListener("load", function() {
//     // Event Binding
//     document.getElementById("btn").addEventListener("click", show);
// })

window.addEventListener("load", initEvents);

function initEvents() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Show function called...");
    var username = document.getElementById("box_1");
    document.getElementById("result").innerHTML = username.value;
}