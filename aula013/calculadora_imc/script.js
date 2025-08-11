
var botao = window.document.getElementById("botao");
var resposta = window.document.getElementById("resposta");
var img = window.document.createElement("img");
img.setAttribute("id", "foto");

botao.addEventListener("click", calculo);

function calculo(){
    var peso = window.document.getElementById("peso");
    var altura = window.document.getElementById("altura");
    var alturafinal = Number(altura.value) ** 2;
    var imc = Number(peso.value) / alturafinal;

    if (imc <= 18.5){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta abaixo do peso. </p>`;
        img.setAttribute("src", "imagens/emoji_triste.png");
        resposta.appendChild(img);
    } else if (imc > 18.5 && imc <= 24.9){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta com o peso normal </p>`;
        img.setAttribute("src", "imagens/emoji_feliz.png");
        resposta.appendChild(img);
    } else if (imc >= 25.0 && imc <= 29.9){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta acima do peso ideal </p>`;
        img.setAttribute("src", "imagens/emoji_raiva.png");
        resposta.appendChild(img);
    } else if (imc >= 30.0 && imc <= 34.9){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta com obesidade grau 1 </p>`;
        img.setAttribute("src", "imagens/emoji_raiva.png");
        resposta.appendChild(img);
    } else if (imc >=35.0 && imc <=39.9){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta com obesidade grau 2 </p>`;
        img.setAttribute("src", "imagens/emoji_raiva.png");
        resposta.appendChild(img);
    } else if(imc >=40.0){
        resposta.innerHTML = `<p> Seu imc é de ${imc.toFixed(2)} e você esta com obesidade morbida <p>`;
        img.setAttribute("src", "imagens/emoji_raiva.png");
        resposta.appendChild(img);
    }
}
