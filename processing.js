function expandText() {
    var zmejelovTextMore = document.getElementById("zmejelovTextMore");
    var buttonZmejelovMas = document.getElementById("buttonZmejelovMas");
    var buttonZmejelovMenos = document.getElementById("buttonZmejelovMenos");
    var versiones = document.getElementById("versiones");

    if (zmejelovTextMore.style.display === "none" || zmejelovTextMore.style.display === "") {
        zmejelovTextMore.style.display = "inline";
        buttonZmejelovMas.style.display = "none";
        buttonZmejelovMenos.style.display ="inline";
        versiones.style.display ="inline";
    } else {
        versiones.style.display = "none";

        zmejelovTextMore.style.display = "none";
        buttonZmejelovMas.style.display ="inline";
        buttonZmejelovMenos.style.display ="none";

    }

   

    


}
function expandTextDaylio1() {

    var Daylio1TextMore = document.getElementById("Daylio1TextMore");
    var buttonDaylio1Mas = document.getElementById("buttonDaylio1Mas");
    var buttonDaylio1Menos = document.getElementById("buttonDaylio1Menos");

    if (Daylio1TextMore.style.display === "none" || zmejelovTextMore.style.display === "") {
        Daylio1TextMore.style.display = "inline";
        buttonDaylio1Mas.style.display = "none";
        buttonDaylio1Menos.style.display ="inline";
    } else {
        Daylio1TextMore.style.display = "none";
        buttonDaylio1Mas.style.display ="inline";

    }


}
function expandTextButton() {
    var zmejelovTextMore = document.getElementById("zmejelovTextMore");
    var buttonZmejelovMas = document.getElementById("buttonZmejelovMas");
    var buttonZmejelovMenos = document.getElementById("buttonZmejelovMenos");
    var versiones = document.getElementById("versiones");

    if (zmejelovTextMore.style.display === "inline" ) {
        zmejelovTextMore.style.display = "none";
        buttonZmejelovMas.style.display = "inline";
        buttonZmejelovMenos.style.display = "none";
        versiones.style.display = "none";

    } 
}

function expandTextButtonDaylio1() {
    var Daylio1TextMore = document.getElementById("Daylio1TextMore");
    var buttonDaylio1Mas = document.getElementById("buttonDaylio1Mas");
    var buttonDaylio1Menos = document.getElementById("buttonDaylio1Menos");

    if (Daylio1TextMore.style.display === "inline" ) {
        Daylio1TextMore.style.display = "none";
        buttonDaylio1Mas.style.display = "inline";
        buttonDaylio1Menos.style.display = "none";

    } 
}
function expandTextDaylio() {

    var Daylio1TextMore = document.getElementById("DaylioTextMore");
    var buttonDaylio1Mas = document.getElementById("buttonDaylioMas");
    var buttonDaylio1Menos = document.getElementById("buttonDaylioMenos");

    if (DaylioTextMore.style.display === "none" || zmejelovTextMore.style.display === "") {
        DaylioTextMore.style.display = "inline";
        buttonDaylioMas.style.display = "none";
        buttonDaylioMenos.style.display ="inline";
    } else {
        DaylioTextMore.style.display = "none";
        buttonDaylioMas.style.display ="inline";

    }


}
function expandTextButtonDaylio() {
    var DaylioTextMore = document.getElementById("DaylioTextMore");
    var buttonDaylioMas = document.getElementById("buttonDaylioMas");
    var buttonDaylioMenos = document.getElementById("buttonDaylioMenos");

    if (DaylioTextMore.style.display === "inline" ) {
        DaylioTextMore.style.display = "none";
        buttonDaylioMas.style.display = "inline";
        buttonDaylioMenos.style.display = "none";

    } 
}