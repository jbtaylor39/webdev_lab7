function init(){
var alertbox = document.getElementById("entrybutton").addEventListener("click", popup);
}

function popup() {
    var textentry = document.getElementById("entryinput").value;
    document.getElementById("textoutput").innerHTML = textentry;
    alert("Juan: " + textentry);
    document.getElementById
}



window.addEventListener('load', init);
