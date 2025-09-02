
let input = window.document.getElementById("adicionar");
const botaoadd = window.document.getElementById("botaoadd");
const botaoexibir = window.document.getElementById("botaoexibir");
const botaoremover = window.document.getElementById("botaoremover");
let lista = [];
let resposta = window.document.getElementById("resposta");

botaoadd.addEventListener("click", novatarefa);
botaoexibir.addEventListener("click", exibirtarefas);
botaoremover.addEventListener("click", removertarefa);

function novatarefa(){
    if(input.value.length == 0){
        window.alert("Preencha o campo e tente novamente")
    } else {
        lista.push(input.value);
        console.log(lista);

    }
    
}

function exibirtarefas(){
    if (lista.length == 0){
        window.alert("Não ha nenhuma tarefa cadastrada");
    } else {
        let c = 0;
        while (c < lista.length) {
            resposta.innerHTML += `<p> ${c+1}. ${lista[c]} <br> </p>`
            c +=1;
        }

    }
    
}

function removertarefa(){
    if(lista.length == 0){
        window.alert("A lista esta vazia");
    } else {
    resposta.innerHTML = '<input type = "number" placeholder = "Numero da tarefa" id = "numerotarefa">';

    resposta.innerHTML += "<button id = 'confirmar'>Confirmar</button>";

    const numerotarefa = window.document.getElementById("numerotarefa");
    
    
    const botaoconfirm = window.document.getElementById("confirmar");

    botaoconfirm.addEventListener("click", excluir);

    function excluir(){
        let c = 0;
        while (c < lista.length){
            if (c == numerotarefa.value - 1){
                lista.splice(c, 1);
                console.log("Removido com sucesso");
                console.log(lista);
                console.log(c);
                c += 1;
            }
        }
    }

   
    }
}