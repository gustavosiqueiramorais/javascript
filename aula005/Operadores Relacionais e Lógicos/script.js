//Leia idade e se o usuario possui carteira, retorne se ele pode dirigir ou não.
var idade = Number(window.prompt("Digite sua idade"));
var carteira = window.prompt("Voce possui carteira?");

idade >=18 && carteira != "Nao", "nao" ? window.alert("Voce pode dirigir") : window.alert("Voce não pode dirigir");

//Leia tres notas, calcule a média e verifique se esta entre 7 e 10
var nota1 = Number(window.prompt("Digite o valor da sua primeira nota"));
var nota2 = Number(window.prompt("Digite o valor da sua segunda nota"));
var nota3 = Number(window.prompt("Digite o valor da sua terceira nota"));

var media = (nota1 + nota2 + nota3) / 3;

media >=7 ? window.alert(`Voce esta aprovado com media ${media}`) : window.alert(`Voce esta reprovado com media ${media}`);

//Leia a temperatura atual e diga se esta segura ou não
var temp = Number(window.prompt("Digite a temperatura atual"));

temp >= 20 && temp <= 30 ? window.alert("A temperatura esta na faixa segura") : window.alert("A temperatura esta fora da faixa segura");

//Leia o ano de nascimento e calcule se a pessoa é maior de idade ou não 
var anonasc = Number(window.prompt("Digite o ano de seu nascimento"));

var idade = 2025 - anonasc;

idade >=18 ? window.alert("Voce é maior de idade") : window.alert("Voce é menor de idade");

//Leia as horas trabalhadas por uma pessoa na semana e diga se ela tem direito a receber hora extra (mais de 44horas trabalhadas)
var hrstrabalhadas = Number(window.prompt("Digite quantas horas voce trabalhou essa semana"));

hrstrabalhadas > 44 ? window.alert("Voce tem direito a receber a hora extra") : window.alert("Voce não tem direito a receber hora extra");
