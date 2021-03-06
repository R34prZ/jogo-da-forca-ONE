const canvasTabuleiro = document.querySelector("#tabuleiro");
const pincel = canvasTabuleiro.getContext("2d");

pincel.fillStyle = "#802bb1";
pincel.strokeStyle = "#802bb1";
pincel.font = "600 24px Poppins";

const larguraCanvas = canvasTabuleiro.width;
const alturacanvas = canvasTabuleiro.height;

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

// Constantes x e y definem o valor padrão da posição onde os traços e letras serão escritos
// OBS: constantes compartilhadas entre as funções desenhaTracos() e escreveLetra()
const POS_X = 400;
const POS_Y = 450;
// Valor máximo para a coordenada X, serve para limitar até onde na tela serão desenhados traços/letras
const X_MAX = 800;

function centralizaPalavra(palavra) {
    // Esta função busca corrigir a centralização da palavra de acordo com sua quantia de letras
    let len = palavra.length;
    if (len < 5) return 100;
    else if (len >= 5 && len < 7) {
        if (X_MAX > 700) return 50;
        else return 0;
    }
    else if (len >= 7 && len <= 9) {
        if (X_MAX > 700) return 25;
        else return -25;
    }
    else if (len > 9 && len < 12) return -50;
    else if (len >= 12) return 0;

    return 0;
}

function desenhaTraco(palavra) {
    let tamanhoTraco = 40;

    let x = POS_X;
    let y = POS_Y;
    let espaco = false;

    // corrige a centralização
    x += centralizaPalavra(palavra);

    for (let i = 0; i < palavra.length; i++) {
        // Se houver um espaço e não for a primeira letra da linha, dar um espaço
        if (palavra[i] == " " && x != POS_X) {
            x += 50;
            espaco = true;  
            continue;
        }
        // Pula para a próxima linha
        if (x > X_MAX) {
            // desenha um risco indicando que a palavra continua na próxima linha
            if (!espaco && palavra[i + 1] != " " && (i + 1) < palavra.length) {
                pincel.fillRect(x, y - 15, 15, 2);
            }
            x = POS_X;
            y += 50;
        }

        pincel.fillRect(x, y, tamanhoTraco, 3);
        x += 50;
        espaco = false;
    }
}

function escreveLetras(palavra) {
    pincel.font = "600 24px Poppins";

    let x = POS_X;
    let y = POS_Y;

    // centraliza palavra
    x += centralizaPalavra(palavra);

    for (let i = 0; i < palavra.length; i++) {
        // Se houver um espaço e não for a primeira letra da linha, dar um espaço
        if (palavra[i] == " " && x != POS_X) {
            x += 50;    
            continue;
        }

        if (x > X_MAX) {
            x = POS_X;
            y += 50;
        }

        // escreve a letra (em maiúsculo)
        pincel.fillText(palavra[i].toUpperCase(), x + 20, y - 10);
        x += 50;
    }
}

function escreveErradas(palavra) {
    let y = 530;

    pincel.font = "400 16px Poppins";

    pincel.clearRect(0, y - 15, larguraCanvas, 20);
    pincel.fillText(palavra, larguraCanvas / 2, y);
}

// alinha o texto a partir do centro
pincel.textBaseLine = "midle";
pincel.textAlign = "center";

function escreveDica(dica) {
    pincel.font = "600 24px Poppins";

    let dicaTexto = `Dica: ${dica}`;
    // let larguraDica = pincel.measureText(dicaTexto).width;
    pincel.fillText(dicaTexto, (larguraCanvas / 2), 390);
}

// Funcção genérica para escrever uma mensagem qualquer em uma posição x, y
function escreve(msg, x, y) {
    pincel.font = "600 24px Poppins";

    pincel.fillText(msg, x, y);
}

function limpaDica() {
    pincel.clearRect(0, 370, larguraCanvas, 50);
}

function limpaCanvas() {
    pincel.clearRect(0, 0, larguraCanvas, alturacanvas);
}