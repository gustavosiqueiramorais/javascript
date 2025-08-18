
var qtdnotas = window.document.getElementById("qtdnotas");
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");

botao.addEventListener("click", media);

function media (){
    if (Number(qtdnotas.value) <= 0){
        window.alert("Verifique os campos e tente novamente");
    } else {
        var qtdnotasfinal = Number(qtdnotas.value);
        var indice = 0;
        var soma = 0;
        var mediafinal = 0;
        while ( indice < qtdnotasfinal ){
            var notas = window.prompt(`Digite o valor da nota ${indice + 1}:`);
            var notasfinal = Number(notas);
            soma = (notasfinal + soma);
            mediafinal = soma / qtdnotasfinal;
            resposta.innerHTML = `<p>A media final das notas digitadas é de ${mediafinal.toFixed(2)}</p>`;
            indice += 1;
        }
    }
}