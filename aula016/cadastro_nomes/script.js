
var nomes = window.document.getElementById("nomes");
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

var cadastronomes = [];

botao.addEventListener("click", armazenar);

function armazenar(){
    if (cadastronomes.length < 5){
        cadastronomes.push(nomes.value);
    } else {
        cadastronomes.sort();
        resposta.innerHTML = `<p> Aqui esta a lista de nomes ordenada em ordem alfabética: ${cadastronomes} </p>`;

    }
    
}