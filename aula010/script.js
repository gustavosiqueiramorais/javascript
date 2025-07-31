var velocidade = window.document.getElementById("velocidade");
var button = window.document.getElementsByTagName("button")[0];
var resposta = window.document.getElementById("resposta");

button.addEventListener("click", calculadora);



function calculadora(){
    var velocidadefinal = Number(velocidade.value);
    if (velocidadefinal  >= 80){
        resposta.innerHTML = `<p>Sua velocidade é de ${velocidadefinal} e você esta multado</p>`;
    } else{
        resposta.innerHTML = `<p>Parabens! Sua velocidade esta dentro dos limites da via</p>`;
    }
}