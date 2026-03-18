class sayajin{
    constructor(){
        console.log("Virar Sayajin");
    }
}

const gohan = new sayajin();

//Criando e acessando propiedades
class cachorro{
    constructor(name){
        this.nome = this.nome; //Criei a propriedade
    }
}

let cachorro1 = new cachorro("Major"); //Criei um objeto e passei um parametro a classe

console.log(cachorro1.nome); //Acessei a propriedade nome do objeto cachorro1


//Criando e accesando métodos

class boxeador{
    constructor(name){
        this.name = name;
    }

    porrada(){ //Criando o método
        console.log("POWWWWW");
    }
}

let boxeador1 = new boxeador("Myke");

boxeador1.porrada();//Acessando o método