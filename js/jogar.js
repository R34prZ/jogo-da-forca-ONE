const menuInicial = document.querySelector(".menu");
const telaJogo = document.querySelector(".jogo");
const botaoJogar = document.querySelector(".btn-jogar");
const botaoReiniciar = document.querySelector(".btn-reiniciar");
const botaoDesistir = document.querySelector(".btn-desistir");

botaoJogar.addEventListener("click", () => {
    menuInicial.classList.add("invisivel");
    telaJogo.classList.toggle("invisivel");
    iniciarJogo();
});

botaoReiniciar.addEventListener("click", () => {
    resetarJogo();
});

botaoDesistir.addEventListener("click", () => {
    telaJogo.classList.toggle("invisivel");
    menuInicial.classList.remove("invisivel");
});

const MAX_ERROS = 6;
let erros = 0;

function iniciarJogo() {
    const palavraObjeto = sortearPalavra();
    const palavra = palavraObjeto.palavra;
    const categoria = palavraObjeto.categoria;

    let letrasUsadas = [];
    let letrasDescobertas = [];
    let palavraDescoberta;

    // recebe as teclas apertadas, as processa e retorna algo de acordo com seu valor
    document.addEventListener("keypress", (event) => {
        let e = event.key.toUpperCase();
        console.log("Letra pressionada: " + e);
        if (validaLetra(e, letrasUsadas)) {
            if (!palavra.includes(e)) erros++;
            letrasUsadas.push(e);
            letrasDescobertas = checarLetra(e, palavra, letrasDescobertas);

            palavraDescoberta = letrasDescobertas.join("");
            if (checarPalavra(palavra, palavraDescoberta))
                anunciaVitoria();
            else
                validaErros(palavra);
        }

    })
    
    desenhaForca();
    desenhaTraco(palavra);
    escreveDica(categoria);
}

// valida se a tecla pressionada é uma letra
function validaLetra(e, letrasUsadas) {
    if (letrasUsadas.includes(e)) return 0;

    if (/[A-Z]/.test(e)) return 1;
    else return 0;
}

// checa se a letra está na palavra ou não
function checarLetra(e, palavra, descobertas) {
    let letrasCorretas = palavra.split("");
    let letrasDescobertas = descobertas;
    for (let i = 0; i < palavra.length; i++) {
        if (letrasCorretas[i] == e) {
            letrasCorretas[i] = e;
            letrasDescobertas[i] = e;
        }
        else letrasCorretas[i] = " ";
    }
    letrasCorretas = letrasCorretas.join("");
    escreveLetras(letrasCorretas);

    return letrasDescobertas;
}

// checa se o usuário acertou a palavra
function checarPalavra(palavraSecreta, palavraDescoberta) {
    if (palavraDescoberta === palavraSecreta)
        return 1;
    
    return 0;
}

// revela a palavra inteira
function revelarPalavra(palavra) {
    escreveLetras(palavra);
}

function resetarJogo() {
    erros = 0;
    limpaCanvas();
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