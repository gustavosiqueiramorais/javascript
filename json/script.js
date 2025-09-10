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
//Adicionando valor em um Objeto, convertendo um Json para um objeto e convertendo um objeto para Json

let json = "{\"titulo\":\"Interstellar\",\"diretor\":\"Christopher Nolan\",\"ano\":2014,\"genero\":\"Ficção Científica\"}"

let filme = JSON.parse(json);
console.log(filme);

filme.duracao = "210 minutos";

let filmeJson = JSON.stringify(filme);
console.log(filmeJson);

/*
    Questão 5 criar um objeto, converter o objeto para json, logo depois, imprimir tanto o objeto quanto o json
*/

const perfilUsuario = {
    nome: "Gustavo",
    idade: 20,
    email: "siqueiragustavocontatto@gmail.com",
    ativo: true,
    interesses: ["Musculação", "Jogos", "Futebol"]

};

const jsonPerfil = JSON.stringify(perfilUsuario);

console.log(perfilUsuario);
console.log(jsonPerfil);

/*
    Questão 6 trabalhar com objetos aninhados e arrays de objetos.
*/

const estoqueLoja = {
    nome: "São Lucas",
    localizacao: ["Goiania", "Brasil"],
    produtos: [{
        id: 1,
        nome: "Arroz",
        preco: 250,
        disponivel: true
    },
    {
        id: 2,
        nome: "Feijao",
        preco: 10,
        disponivel: true

    },

    {
        id: 3,
        nome: "Carne",
        preco: 40,
        disponivel: false
    }

    ]
}

/*
    Questão 7, percorrendo um objeto.
*/

let livro2 = {
    titulo: "O Hobbit",
    autor: "J.R.R Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia"
};

for (const chave in livro2){
    console.log(livro2[chave]);
}





