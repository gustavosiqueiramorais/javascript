
var numero = window.document.getElementById("cadastro");
var botaosalvar = window.document.getElementById("salvecadastro");

var numerobusca = window.document.getElementById("busca");
var botaobuscar = window.document.getElementById("buscar");

var resposta = window.document.getElementById("resposta");
var vetornumeros = [];

botaosalvar.addEventListener("click", salvarnumeros);
botaobuscar.addEventListener("click", buscanumeros);

function salvarnumeros(){
    if (numero.value.length == 0){
        window.alert("Preencha os campos e tente novamente")
    } else {
        vetornumeros.push(Number(numero.value));
        console.log(vetornumeros);
    }
    
}

function buscanumeros(){

    if(numerobusca.value.length == 0){
        window.alert("Preencha os campos e tente novamente");
    } else {

        let buscafinal;
        buscafinal = vetornumeros.indexOf(Number(numerobusca.value));

        if (buscafinal == -1){
            resposta.innerHTML = `<p>Erro! O numero que voce deseja não esta na lista</p>`;
        } else {
            resposta.innerHTML = `<p>Sucesso! O numero foi encontrado na posição ${buscafinal}</p.`;
        }
    }    
}
