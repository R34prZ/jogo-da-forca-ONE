let canvasTabuleiro = document.querySelector("#tabuleiro");
let pincel = canvasTabuleiro.getContext("2d");

pincel.fillStyle = "#802bb1";
pincel.strokeStyle = "#802bb1";

function desenhaForca() {
    pincel.fillRect(450, 350, 300, 5); // base
    pincel.fillRect(550, 40, 5, 310); // mastro principal
    pincel.fillRect(550, 40, 150, 5); // topo
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

function desenhaTraco(palavra) {
    let tamanhoTraco = 40;
    let tracos = 0;

    let x = 400;
    let y = 450;

    for (let i = 0; i < palavra.length; i++) {

        if (palavra[i] == " " && x != 390) {
            x += 50;
            continue;
        }

        pincel.fillRect(x, y, tamanhoTraco, 3);
        x += 50;
        tracos++;

        if (tracos % 8 == 0) {
            y += 50;
            x = 390;
        }
    }
    
}

desenhaForca();
desenhaCabeca();
desenhaCorpo();
desenhaBracoEsquerdo();
desenhaBracoDireito();
desenhaPernaEsquerda();
desenhaPernaDireita();

desenhaTraco("MARTELOS");