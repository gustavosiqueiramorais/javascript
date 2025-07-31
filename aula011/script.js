//Exercicio 1

var number = window.document.getElementById("number");
var button = window.document.getElementsByTagName("button")[0];
var resp = window.document.getElementById("resp");

button.addEventListener("click", maior100);


function maior100(){
    var numberfinal = Number(number.value);
    if (numberfinal > 100){
        resp.innerHTML = "<p> Seu numero é maior que 100 </p>";

    }
}

//Exercicio 2

var idade = window.document.getElementById("idade");
var button2 = window.document.getElementsByTagName("button")[1];
var respidade = window.document.getElementById("respidade");

button2.addEventListener("click", calcidade);

function calcidade(){
    var idadefinal = Number(idade.value);
    if (idadefinal >= 18){
        respidade.innerHTML = "<p> Você é maior de idade e pode tirar sua carteira de motorista </p";
    } else {
        respidade.innerHTML = "<p> Você é menot de idade e <strong>NÂO<strong> pode tirar sua carteira de motorista </p>";
    }
}

//Exercicio 3
var number1 = window.document.getElementById("number1");
var number2 = window.document.getElementById("number2");
var button3 = window.document.getElementsByTagName("button")[2];
var respmaior = window.document.getElementById("respmaior");

button3.addEventListener("click", calcmaior);

function calcmaior(){
    var number1final = Number(number1.value);
    var number2final = Number(number2.value);
    if (number1final > number2final){
        respmaior.innerHTML = "<p> O primeiro numero é maior que o segundo</p>";

    }
}

//Exercicio 4 
var senha = window.document.getElementById("senha");
var button4 = window.document.getElementsByTagName("button")[3];
var respsenha = window.document.getElementById("respsenha");

button4.addEventListener("click", verificarsenha);;

function verificarsenha(){
    var senhafinal = Number(senha.value);
    if (senhafinal == 1234){
        respsenha.innerHTML = "<p>Senha correta, acesso permitido </p>";
    } else {
        respsenha.innerHTML = "<p>Senha incorreta, acesso negado </p>";
    }
}

//Exercicio 5 
var par = window.document.getElementById("par");
var button5 = window.document.getElementsByTagName("button")[4];
var resppar = window.document.getElementById("resppar");

button5.addEventListener("click", calcpar);

function calcpar(){
    var parfinal = Number(par.value);
    if (parfinal % 2 == 0){
        resppar.innerHTML = "<p> Seu numero é par. </p>";

    } else {
        resppar.innerHTML = "<p> Seu numero é impar. </p>";
    }
}