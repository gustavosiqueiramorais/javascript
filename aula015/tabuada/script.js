
var numero = window.document.getElementById("numero");
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

botao.addEventListener("click", tabuada);

function tabuada (){
    if (numero.value.length == 0){
    window.alert("Preencha o campo e tente novamente");
    } else{
        for (var contador = 1; contador <=10; contador++){
        var numerofinal = Number(numero.value);
        resposta.innerHTML += `<p>${numerofinal} X ${contador} = ${numerofinal * contador}</p>`;
        }

    }
    
}