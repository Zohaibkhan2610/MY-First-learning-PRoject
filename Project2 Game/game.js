let menu = document.querySelector("#menu-icon");
var side = document.getElementById("sidemen");

menu.addEventListener("click",open)
menu.addEventListener("click",close)

function open (){
    side.style.right = "0";
}
function close (){
    side.style.right = "-100";
}