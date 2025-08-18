
var soma = 0;
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

botao.addEventListener("click", somatotal);

function somatotal(){
    do {
        var numero = window.prompt("Digite um numero: (0 para fechar)");
        soma += Number(numero);
        resposta.innerHTML = `<p> A sua soma deu um total de ${soma} </p>`;
    } while (numero != 0)
}



