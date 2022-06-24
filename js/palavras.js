let palavras = {
    "frutas": [
        "BANANA",
        "ABACAXI",
        "ABACATE",
        "AMORA",
        "ACEROLA",
        "CEREJA",
        "FIGO",
        "JABUTICABA",
        "LARANJA",
        "MANGA",
        "PITANGA",
        "UVA"
    ],

    "ferramentas": [
        "TESOURA",
        "MARTELO",
        "ALICATE",
        "FURADEIRA",
        "PARAFUSADEIRA",
        "SERROTE",
        "SERRA",
        "LIXA",
        "CHAVE DE FENDA",
        "MARRETA",
        "TRENA"
    ],

    "objetos": [
        "AGULHA",
        "ALFINETE",
        "ANEL",
        "ALMOFADA",
        "COPO",
        "PENTE",
        "ESCOVA",
        "ESCADA",
        "LIVRO"
    ],

    "utensilios": [
        "GARFO",
        "FACA",
        "PRATO",
        "PANELA"
    ],

    "animais": [
        "GATO",
        "CACHORRO",
        "URSO POLAR",
        "URSO PARDO",
        "URSO PANDA",
        "MACACO",
        "COELHO",
        "ZEBRA",
        "ABELHA",
        "ARANHA",
        "BOI",
        "VACA",
        "BALEIA",
        "ESQUILO",
        "GAFANHOTO",
        "LAGARTO",
        "RATO",
        "TARTARUGA"
    ],

    "roupas": [
        "CASACO",
        "BOTA",
        "LUVA",
        "MOLETOM",
        "CUECA",
        "CALCINHA",
        "SAPATO",
        "BLUSA",
        "BERMUDA",
        "CAMISA",
        "JAQUETA",
        "SAIA",
        "VESTIDO",
        "TERNO",
        "GRAVATA",
        "CHINELO",
        "MEIA"
    ]
};

function sortearPalavra() {
    // sorteia a categoria da palavra
    let numCategorias = Object.keys(palavras).length;
    let categoria = Object.keys(palavras)[Math.floor(Math.random() * numCategorias)];

    // sorteia a palavra a partir do array da categoria
    let numPalavras = palavras[categoria].length;
    let palavra = palavras[categoria][Math.floor(Math.random() * numPalavras)];

    return {"palavra": palavra, "categoria": categoria};
}