
var numinput = window.document.getElementById("numero");
var numarray = [];
var adicionar = window.document.getElementById("adicionar");
var resposta = window.document.getElementById("resposta");
var finalizar = window.document.getElementById("finalizar");


adicionar.addEventListener("click", salvarnumero);
finalizar.addEventListener("click", finalizarnumero);

function numerovalido(){
    if(Number(numinput.value) <=100){
        console.log("Passou")
        return true;
    } else {
        return false;
    }

}

function salvarnumero(){
    if (numinput.value.length == 0 || !numerovalido()){
        window.alert("Preencha os campos e tente novamente");
    } else {
        var numfinal = Number(numinput.value);
        numarray.push(numfinal);
        resposta.innerHTML += `<p>Numero ${numfinal} adicionado.</p> <br>`;
    }
    
}

function finalizarnumero(){
    if (numinput.value.length == 0){
        window.alert("Preencha os campos e tente novamente");
    } else {
        let c = 0;
        let menornumero = 999999999;
        let media = 0;
        let soma = 0;
    
        while (c < numarray.length){

            if (numarray[c] < menornumero){
                menornumero = numarray[c];
            }
            soma += numarray[c];
            c +=1;
            media = soma / c;
        
        }

    resposta.innerHTML += `<p>O numero ${menornumero} foi o menor cadastrado </p>`;
    resposta.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
    resposta.innerHTML += `<p>A media dos numeros cadastrados é de ${media.toFixed(2)}</p>`;
    resposta.innerHTML += `<p>Foram adicionados ${c} numeros ao total.</p>`;
    }
    
}


