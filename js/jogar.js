const menuInicial = document.querySelector(".menu");
const telaJogo = document.querySelector(".jogo");
const sectInfo = document.querySelector(".info");
const botaoJogar = document.querySelector(".btn-jogar");
const botaoReiniciar = document.querySelector(".btn-reiniciar");
const botaoDesistir = document.querySelector(".btn-desistir");
const entradaMobile = document.querySelector(".entrada-mobile");

botaoJogar.addEventListener("click", () => {
    menuInicial.classList.add("invisivel");
    telaJogo.classList.toggle("invisivel");
    sectInfo.classList.add("invisivel");
    iniciarJogo();
});

botaoReiniciar.addEventListener("click", () => {
    resetarJogo();
});

botaoDesistir.addEventListener("click", () => {
    // telaJogo.classList.toggle("invisivel");
    // menuInicial.classList.remove("invisivel");
    // sectInfo.classList.remove("invisivel");
    location.reload();
});

const MAX_ERROS = 6;
let erros = 0;

let palavrasUsadas = [];
let letrasUsadas = [];
let letrasDescobertas = [];
let letrasErradas = []
let palavraDescoberta;

let palavraObjeto = sortearPalavra();

function iniciarJogo() {

    while (palavrasUsadas.includes(palavraObjeto.palavra))
        palavraObjeto = sortearPalavra();
    
    let palavra = palavraObjeto.palavra;
    let categoria = palavraObjeto.categoria;

    palavrasUsadas.push(palavra);

    
    console.log(palavra);

    // recebe as teclas apertadas, as processa e retorna algo de acordo com seu valor
    document.addEventListener("keydown", teclaHandler);
    
    desenhaForca();
    desenhaTraco(palavra);
    escreveDica(categoria);
}

// handler do evento de tecla pressionada
function teclaHandler(event) {
    let palavra = palavraObjeto.palavra;
    let e = event.key.toUpperCase();

    console.log("Letra pressionada: " + e);
    if (validaLetra(e)) {
        if (!palavra.includes(e)) {
            erros++;
            letrasErradas.push(e);
        }

        letrasUsadas.push(e);
        letrasDescobertas = checarLetra(e, palavra);

        palavraDescoberta = letrasDescobertas.join("");
        if (checarPalavra(palavra, palavraDescoberta))
            anunciaVitoria();
        else
            validaErros(palavra);   
    }
}

// valida se a tecla pressionada é uma letra
function validaLetra(e) {
    if (letrasUsadas.includes(e)) return 0;
    if (/[A-Z]/.test(e)) return 1;
    else return 0;
}

// checa se a letra está na palavra ou não
function checarLetra(e, palavra) {
    let letrasCorretas = palavra.split("");

    for (let i = 0; i < palavra.length; i++) {
        if (letrasCorretas[i] == e) {
            letrasDescobertas[i] = e;
        }
        else letrasCorretas[i] = " ";
    }
    letrasCorretas = letrasCorretas.join("");
    escreveLetras(letrasCorretas);
    escreveErradas(letrasErradas.join(" "));

    return letrasDescobertas;
}

// checa se o usuário acertou a palavra
function checarPalavra(palavraSecreta, palavraDescoberta) {
    if (palavraSecreta === palavraDescoberta)
        return 1;
    
    return 0;
}

// revela a palavra inteira
function revelarPalavra(palavra) {
    escreveLetras(palavra);
}

function resetarJogo() {
    erros = 0;
    letrasUsadas = [];
    letrasDescobertas = [];
    letrasErradas = [];
    palavraDescoberta = "";
    palavraObjeto = sortearPalavra();

    limpaCanvas();
    document.removeEventListener("keydown", teclaHandler);
    iniciarJogo();
}

// desenha a forca conforme os erros
function validaErros(palavra) {
    if (erros == 1) desenhaCabeca();
    else if (erros == 2) desenhaCorpo();
    else if (erros ==  3) desenhaBracoDireito();
    else if (erros == 4) desenhaBracoEsquerdo();
    else if (erros == 5) desenhaPernaEsquerda();
    else if (erros >= MAX_ERROS) {
        desenhaPernaDireita();
        limpaDica();
        escreve("Ops! Você perdeu!", larguraCanvas / 2, 390);
        revelarPalavra(palavra);
    }
}

function anunciaVitoria() {
    limpaDica();
    escreve("Parabéns! Você acertou!", larguraCanvas / 2, 390);
}