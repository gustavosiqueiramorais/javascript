
const salvarProduto = window.document.getElementById("btnsalvar");

const listaProdutos = window.document.getElementById("btnlista");

const removerProdutos = window.document.getElementById("btnremover");

const nomeProduto = window.document.getElementsByTagName("input")[1];

let qtdProdutos = window.document.getElementsByTagName("input")[2];

let preco = window.document.getElementsByTagName("input")[3]

const descricao = window.document.getElementsByTagName("input")[4];


let produtos = [];
let produtosFinal;


salvarProduto.addEventListener("click", salvar);
listaProdutos.addEventListener("click", listar);
removerProdutos.addEventListener("click", remover);

function salvar(){
    if (nomeProduto.value.length == 0){
        window.alert("Preencha os campos e tente novamente");
    } else{
        let objetoDados = {};
        objetoDados.nome = nomeProduto.value;
        objetoDados.quantidade = qtdProdutos.value;
        objetoDados.preço = preco.value;
        objetoDados.descriçao = descricao.value;
        produtos.push(objetoDados);
        produtosFinal = JSON.stringify(produtos);
        console.log(produtosFinal);
        window.alert("Produto salvo com sucesso");
    }
    
}

function listar(){
    const div = document.createElement("div");
    div.id = "lista";
    div.innerHTML = `<p> Toma Jack </p> ${produtosFinal}`;
    //Melhorar a exibição dos produtos.

    document.body.appendChild(div);
}

function remover() {
    let divRemover = document.createElement("div");
    divRemover.id = "remover";

    let listar = JSON.parse(produtosFinal);


    listar.forEach((produto, index) => {
        divRemover.innerHTML += `
            <p>Índice: ${index}</p>
            <p>Nome: ${produto.nome}</p>
            <p>Quantidade: ${produto.quantidade}</p>
            <p>Preço: ${produto.preço}</p>
            <p>Descrição: ${produto.descriçao}</p>
            <hr>
        `;
    });

    divRemover.innerHTML += `<h1 id = "titulo_remover"> Digite o indice do Produto que deseja remover </h1> <br> <input type = "number" id = "input_remover" placeholder = "Indice" ></input> <br> <button id ="botao_remover">Remover</button>`;



    document.body.appendChild(divRemover);
}







