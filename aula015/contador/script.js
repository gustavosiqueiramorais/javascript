
var inicio = window.document.getElementById("inicio");
var fim = window.document.getElementById("fim");
var passo = window.document.getElementById("passo");
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

botao.addEventListener("click", contagem);


function contagem(){
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Preencha todos os campos e tente novamente");

    } else {
        var iniciocont = Number(inicio.value);
        var fimcont = Number(fim.value);
        var passocont = Number(passo.value);
        
        if (iniciocont < fimcont) {
            while (iniciocont < fimcont){
                resposta.innerHTML += `<p>${iniciocont}</p>`;
                iniciocont = iniciocont + passocont;
            }
            
        }
        else if (iniciocont > fimcont){
            while (iniciocont > fimcont){
                resposta.innerHTML += `<p>${iniciocont}</p>`;
                iniciocont = iniciocont - passocont;
            }
        }
    }

}

