//Selecionando o botão somar e armazenando ele em uma variável
var soma = window.document.getElementById("soma");

//Adicionando um listener que vai verificar se o botão foi clicado
soma.addEventListener("click", somar);

//Função responsável por fazer a soma caso so botão "somar" for clicado.
function somar() {
    var num1 = window.document.getElementById("num1");
    var num2 = window.document.getElementById("num2");

    //Transoformando os valores lidos em tipo númerico
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    //Somando os dois valores
    var s = n1 + n2;
    
    //Exibindo a resposta ao usuario
    resposta.innerHTML = `A soma entre ${n1} e ${n2} é = ${s}`;
    
}