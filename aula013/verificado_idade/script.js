var botao = window.document.getElementById("botao");
var sexof = window.document.getElementById("sexof");
var sexom = window.document.getElementById("sexom");
var resposta = window.document.getElementById("resposta");
var img = window.document.createElement("img");
img.setAttribute("id", "foto");

botao.addEventListener("click", verificar);

function verificar (){
    var anonascimento = window.document.getElementById("anonascimento");
    var idade = 2025 - (anonascimento.value);
    if (sexof.checked && idade <= 30){
        resposta.style.textAlign = "center";
        resposta.innerHTML = `<p> Detectamos mulher com ${idade} anos </p>`;
        img.setAttribute("src", "imagens/mulher_novo.jpg");
        resposta.appendChild(img);
    } else if (sexof.checked && idade >=40){
        resposta.style.textAlign = "center";
        resposta.innerHTML = `<p> Detectamos mulher com ${idade} anos </p>`;
        img.setAttribute("src", "imagens/mulher_idade.jpg");
        resposta.appendChild(img);
        
    } else if (sexom.checked && idade <= 30){
        resposta.style.textAlign = "center";
        resposta.innerHTML = `<p> Detectamos homem com ${idade} anos </p>`;
        img.setAttribute("src", "imagens/homem_novo.jpg");
        resposta.appendChild(img);
    } else if (sexom.checked && idade >=40){
        resposta.style.textAlign = "center";
        resposta.innerHTML = `<p> Detectamos homem com ${idade} anos </p>`;
        img.setAttribute("src", "imagens/homem_idade.jpg");
        resposta.appendChild(img);
    }



}







