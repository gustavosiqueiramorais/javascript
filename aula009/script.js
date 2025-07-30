// 01. Mudando a cor de fundo de um paragrafo ao clicar em um botão.
var button = window.document.getElementById("botao");
var paragrafo = window.document.getElementById("p");

button.addEventListener("click", botao);

function botao(){
    paragrafo.style.background = "red";
}

// 02. Uma Div que vai mudar de cor após o mouse passar por cima e volta ao normal quando o mouse sai,
var div = window.document.getElementsByTagName("div")[0];

div.addEventListener("mouseenter", mouseenter);
div.addEventListener("mouseout", mouseout);

function mouseenter(){
    div.style.background = "#D9D7D7";
}

function mouseout(){
    div.style.background = "#404040";
}

// 03. Mostrar um alert caso o mouse passe sobre uma div
var mensagem = window.document.getElementsByTagName("div")[1];

mensagem.addEventListener("mouseenter", exibirmsg);

function exibirmsg(){
    window.alert("Oi");
}


// 04. Ao clicar em um botão o tamanho da fonte irá aumentar
var buttonaumentar = window.document.getElementById("buttonaumentar");
var p = window.document.getElementsByTagName("p")[1];

buttonaumentar.addEventListener("click",aumentarfonte);

function aumentarfonte(){
    p.style.fontSize = "35px";
}

// 05. Criando um botão que vai acender uma lampada ao ser clicado
var buttonlampada = window.document.getElementsByTagName("button")[2];
var img = window.document.getElementsByTagName("img")[0];

buttonlampada.addEventListener("click",acender);

function acender(){
    img.src = "imagens/lampada_acessa.png";
}




