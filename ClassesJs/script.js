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

console.log(trunks);

//Usando classes para tratamento de erros.

//Range error

for (contador = 0; contador <= 10; contador++){
    console.log("Estamos contando...");
    
}
 try {
    if (contador > 10){
        throw new RangeError; //Peguei e lancei o erro.
    }
} catch (error){
    if (error instanceof RangeError){ //Tratei o erro capturando ele através do comando instanceof
        console.log("Valor fora do range permitido");
    }
}

//Reference Error
 try{
    console.log(variavelInexistente);
 } catch (error){
    if(error instanceof ReferenceError){
        console.log("A variavel não existe");
    }
 }


