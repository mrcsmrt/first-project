var arrowRight = window.document.getElementById("arrowright")
var imgModelo = window.document.getElementById("imgmodelo")
var imgModelo2 = window.document.getElementById("imgmodelo2")
var arrowLeft = window.document.getElementById("arrowleft")

function RolarParaDireita() {
    imgModelo.style = "display:none"
    imgModelo2.style = "display:flex"
    arrowRight.style = "display:none"
    arrowLeft.style = "display:flex"
}

function RolarParaEsquerda() {
    imgModelo.style = "display:flex"
    imgModelo2.style = "display:none"
    arrowRight.style = "display:flex"
    arrowLeft.style = "display:none"
}