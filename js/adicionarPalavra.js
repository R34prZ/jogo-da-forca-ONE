const btnAdcMenu = document.querySelector(".btn-adcPalavra");
const btnAdcPalavra = document.querySelector(".btn-adc");
const btnSair = document.querySelector(".btn-sair");

const inputPalavra = document.querySelector(".nova-palavra");
const inputCategoria = document.querySelector(".nova-palavra-categoria");

const menuAdcPalavra = document.querySelector(".add-palavra");
const divErros = document.querySelector(".add-erros");

btnAdcMenu.addEventListener("click", () => {
    menuInicial.classList.add("invisivel");
    menuAdcPalavra.classList.toggle("invisivel");
    limpaInput();
    limpaErros();
});

btnSair.addEventListener("click", () => {
    menuInicial.classList.remove("invisivel");
    menuAdcPalavra.classList.toggle("invisivel");
});

btnAdcPalavra.addEventListener("click", () => {
    let palavra = inputPalavra.value.toUpperCase();
    let categoria = inputCategoria.value.toLowerCase();
    adicionarPalavra(palavra, categoria);
    limpaInput();
    setTimeout(limpaErros, 5000);
});

function adicionarPalavra(palavra, classe) {
    
    let erros = validaPalavra(palavra, classe);

    if (erros.length == 0) {
        if (!Object.keys(palavras).includes(classe))
            palavras[classe] = [];

        palavras[classe].push(palavra);
        console.log("Palavra " + palavra + " da classe " + classe + " adicionada com sucesso!");
        mostrarErros([`Palavra ${palavra} da categoria ${classe} adicionada com sucesso!`]);
    }
    else {
        limpaErros();
        mostrarErros(erros);
    }
}

function validaPalavra(palavra, classe) {
    let erros = [];

    if (Object.keys(palavras).includes(classe)) {
        if (palavras[classe].includes(palavra))
            erros.push("Palavra já existe!");
    }
    
    if (palavra.length == 0) erros.push("Você deve incluir uma palavra!");
    if (classe.length == 0)  erros.push("Você deve incluir uma classe!");

    if (/\d/.test(palavra)) erros.push("Números não são válidos! Utilize apenas letras.");
    if (/[Á-Ź]/.test(palavra)) erros.push("Acentos não são válidos!");
    else if (!(/([A-Z]+)/.test(palavra)) && (palavra.length > 0 || classe.length > 0))
        erros.push("Palavra inválida! Use apenas letras.");

    return erros;
}

function mostrarErros(erros) {
    for (let erro in erros) {
        let p = document.createElement("p");
        p.innerText = erros[erro];
        p.classList.add("texto-padrao");
        divErros.appendChild(p)
    }
}

const limpaInput = () => {inputPalavra.value = ""; inputCategoria.value = "";};
const limpaErros = () => {divErros.innerHTML = "";};