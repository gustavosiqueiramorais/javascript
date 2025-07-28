//Selecionando um elemento do documento Html, e adicionando ele a uma variável.
var botao = window.document.getElementById("botao");

//EventListener na variavel para fazer a verificação se o evento ocorreu.
botao.addEventListener("click", cliquefunção);

//Função responsável pela mudança do botão, caso o evento tenha ocorrido.
function cliquefunção() {
    botao.style.backgroundColor = "red";
    botao.innerText = "Clicked";
}