// alterna em modo escuro/claro

const btnTrocarCor = document.querySelector(".trocar-cor");
const body = document.querySelector("body");

btnTrocarCor.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    body.classList.toggle("modo-claro");
});