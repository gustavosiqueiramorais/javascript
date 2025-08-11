var texto = window.document.getElementById("horario");
var conteudo = window.document.getElementById("conteudo");
var img = window.document.getElementsByTagName("img")[0];
var diaatual = new Date();
var horaatual = diaatual.getHours();
var titulo = window.document.getElementsByTagName("h1")[0];

if (horaatual >= 18  && horaatual <= 22){
    conteudo.style.backgroundColor = "#0f1b34ff";
    img.src = "imagens/paisagem_noite.jpg";
    texto.innerHTML = `<p> Agora são ${horaatual} horas </p>`;
    titulo.style.color = "#fff";
} else if (horaatual >= 12){
    conteudo.style.backgroundColor = "#a7772bff";
    img.src = "imagens/paisagem_tarde.jpg";
    texto.innerHTML = `<p>Agora são ${horaatual} horas </p>`;
    titulo.style.color = "black";
} else if (horaatual < 12){
    conteudo.style.backgroundColor ="#FBCA49";
    img.src = "imagens/paisagem_manha.jpg";
    texto.innerHTML = `<p> Agora são ${horaatual} horas </p>`;
    titulo.style.color = "black";
}
