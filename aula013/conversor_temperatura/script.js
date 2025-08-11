
var tempatual = window.document.getElementById("temperatura");
var farenheit = window.document.getElementById("farenheit");
var kelvin = window.document.getElementById("kelvin");
var botao = window.document.getElementById("converter");
var resposta = window.document.getElementById("resposta");
var img = window.document.createElement("img");
img.setAttribute("id", "foto");

botao.addEventListener("click", conversao);

function conversao(){
    if (farenheit.checked){
        var tempfinal = (Number(tempatual.value) * 1.8) + 32;
        resposta.innerHTML = `<p> A temperatura atual em farenheit é de ${tempfinal} ºF</p>`;
        if (tempatual.value <= 15){
            img.setAttribute("src", "imagens/paisagem_fria.jpg");
            resposta.appendChild(img);
        } else if(tempatual.value >=30){
            img.setAttribute("src", "imagens/paisagem_quente.jpg");
            resposta.appendChild(img);
        } else {
            img.setAttribute("src", "imagens/paisagem_boa.jpg");
            resposta.appendChild(img);
        }
    } else if (kelvin.checked){
        var tempfinal = (Number(tempatual.value) + 273.15);
        resposta.innerHTML = `<p> A temperatura atual em kelvin é de ${tempfinal} ºK </p>`;
        if (tempatual.value <= 15){
            img.setAttribute("src", "imagens/paisagem_fria.jpg");
            resposta.appendChild(img);
        } else if(tempatual.value >=30){
            img.setAttribute("src", "imagens/paisagem_quente.jpg");
            resposta.appendChild(img);
        } else {
            img.setAttribute("src", "imagens/paisagem_boa.jpg");
            resposta.appendChild(img);
        }
    }
}


