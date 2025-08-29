/*
    Criar váriavel para armazenar a idade.
    Criar variavel para armazenar o botão
    Criar variável para armazenar a resposta.
    Criar um evento dom de clique para o botão
    Evento vai chamar uma função{
        Converter Número digitado em Number.
        Verificar se é maior de 18 ou não
        Retornar uma resposta para cada situação.
        Exibir resposta.
    }
*/

var idade = window.document.getElementById("idade");
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

botao.addEventListener("click", verificar);

function verificar(){
    if (Number(idade.value) >= 18){
        resposta.innerHTML = `<p>
        Voce tem ${idade.value} anos e seu acesso foi permitido </p>`;
    } else {
        resposta.innerHTML = `<p> Voce tem ${idade.value} anos e seu acesso foi negado </p>`
    }
}