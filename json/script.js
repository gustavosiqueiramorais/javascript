const candidatos = {
    "nome": "Gustavo",
    "idade": 20,
    "cidade": "goiania"
};

const candidatosJson = JSON.stringify(candidatos);
console.log(candidatosJson);


//Questão 1
//Construindo um objeto e exibindo o valor de uma propriedade dele

const livro = {
    titulo: "JavaScript",
    autor: "Gustavo Siqueira",
    páginas: 1200,
    disponivel: true
};

console.log(livro.autor);


//Questão 2
//Adicionando e removendo valores de um objeto.

livro.editora = "WebLink";
delete livro.disponivel;

console.log(livro);

//Questão 3
//Criando um objeto aninhado e acessando uma propriedade aninhada.

const usuario = {
    nome: "Gustavo",
    email: "siqueiragustavocontato@gmail.com",
    endereco: {
        rua: "Spri no ray",
        numero: "50",
        cidade: "Goiânia"
    }
};

console.log(usuario.nome); //Exibir o nome
console.log(usuario.endereco.rua); //Exibir a rua

//Questão 4
//Array de objetos
const produtos = [
    {
        nome: "Bola",
        preco: 200,
        quantidade: 1200,
    },

    {
        nome: "Computador",
        preco: 5.000,
        quantidade: 20
    }
];




