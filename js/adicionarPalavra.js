palavras = receberPalavras();

function adicionarPalavra(palavra, classe) {
    palavras[classe].push(palavra);
    console.log("Palavra " + palavra + " da classe " + classe + " adicionada com sucesso!");
}
