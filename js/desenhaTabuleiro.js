let canvasTabuleiro = document.querySelector("#tabuleiro");
let pincel = canvasTabuleiro.getContext("2d");

const larguraCanvas = canvasTabuleiro.getBoundingClientRect().width;
const alturaCanvas = canvasTabuleiro.getBoundingClientRect().height;

pincel.fillStyle = "#802bb1";
pincel.strokeStyle = "#802bb1";

function desenhaForca() {
    pincel.fillRect(500, 400, 300, 5); // base
    pincel.fillRect(580, 40, 5, 360); // mastro principal
    pincel.fillRect(580, 40, 120, 5); // topo
    pincel.fillRect(700, 40, 5, 40); // corda
}

function desenhaCabeca() {
    pincel.beginPath();
    pincel.arc(700, 105, 25, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaCorpo() {
    pincel.fillRect(700, 105, 5, 135);
}

function desenhaBracoEsquerdo() {
    pincel.beginPath()
    pincel.moveTo(705, 120);
    pincel.lineTo(670, 180);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaBracoDireito() {
    pincel.beginPath();
    pincel.moveTo(700, 120);
    pincel.lineTo(735, 180);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaPernaEsquerda() {
    pincel.beginPath();
    pincel.moveTo(702, 238);
    pincel.lineTo(680, 320);
    pincel.lineWidth = 5;
    pincel.stroke();
}

function desenhaPernaDireita() {
    pincel.beginPath();
    pincel.moveTo(703, 238);
    pincel.lineTo(725, 320);
    pincel.lineWidth = 5;
    pincel.stroke();
}

desenhaForca();
desenhaCabeca();
desenhaCorpo();
desenhaBracoEsquerdo();
desenhaBracoDireito();
desenhaPernaEsquerda();
desenhaPernaDireita();