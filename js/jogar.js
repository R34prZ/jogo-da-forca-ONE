const menuInicial = document.querySelector(".menu");
const telaJogo = document.querySelector(".jogo");
const botaoJogar = document.querySelector(".btn-jogar");

botaoJogar.addEventListener("click", () => {
    menuInicial.classList.add("invisivel");
    telaJogo.classList.toggle("invisivel");
    iniciarJogo();
});

let erros = 0;

function iniciarJogo() {
    const palavraObjeto = sortearPalavra();
    const palavra = palavraObjeto.palavra;
    const categoria = palavraObjeto.categoria;

    let letrasUsadas = [];
    let letrasDescobertas = [];
    let palavraDescoberta;

    document.addEventListener("keypress", (event) => {
        let e = event.key.toUpperCase();
        console.log("Letra pressionada: " + e);
        if (validaLetra(e, letrasUsadas)) {
            if (!palavra.includes(e)) erros++;
            letrasUsadas.push(e);
            letrasDescobertas = checarLetra(e, palavra, letrasDescobertas);
        }

        palavraDescoberta = letrasDescobertas.join("");
    })
    
    desenhaForca();
    desenhaTraco(palavra);
    escreveDica(categoria);
    console.log(palavra);
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