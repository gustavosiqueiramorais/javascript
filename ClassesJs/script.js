class sayajin{
    constructor(){
        console.log("Virar Sayajin");
    }

    kamehameha(){
        console.log("KAMEHAMEHAAAAA");
    }

    voar(){
        console.log("wooosh");
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

//Criando uma classe usando a herança

class sayajinHibrido extends sayajin{
    voar(){
        console.log("fuuuuuu")// Sobrescrevendo um método
    }
}

const trunks = new sayajinHibrido();

trunks.kamehameha; //-> A herança permite herdar os métos e atributos da classe selecionada