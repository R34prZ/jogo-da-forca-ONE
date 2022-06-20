let menuInicial = document.querySelector(".menu");
let telaJogo = document.querySelector(".jogo");
let botaoJogar = document.querySelector(".btn-jogar");

botaoJogar.addEventListener("click", function() {
    menuInicial.classList.add("invisivel");
    telaJogo.classList.toggle("invisivel");
});