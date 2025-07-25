//Leia dois numeros e diga se a soma é maior ou menor que 12
var num1 = Number(window.prompt("Digite um numero"));
var num2 = Number(window.prompt("Digite outro numero"));
var resultado = num1 + num2;

resultado > 12 ? window.alert('A soma é maior que 12') : window.alert('A soma não é maior que 12');

//Leia um numero e mostre o antecessor e o sucessor desse numero
var num3 = Number(window.prompt('Digite um numero inteiro'));

var sucessor = num3 + 1;
var antecessor = num3 - 1;

window.alert(`O sucessor desse numero é = ${sucessor}`);
window.alert(`O antecessor desse numero é = ${antecessor}`);

//Leia um numero e mostre o seu dobro e o triplo
var num4 = Number(window.prompt('Digite um numero'));

var dobro = num4 * 2;
var triplo = num4 * 3;

window.alert(`O dobro do numero digitado é = ${dobro}`);
window.alert(`O triplo do numero digitado é = ${triplo}`);


//Leia duas notas digitadas por um aluno, calcule e mostre sua media
var nota1 = Number(window.prompt('Digite a sua primeira nota'));
var nota2 = Number(window.prompt('Digite a sua segunda nota'));

var media = (nota1 + nota2) / 2;
window.alert(`A media das suas notas é = ${media}`);

//Leia um valor em metros e converta para centimetros e milimetros os exibindo
var metros = Number(window.prompt('Digite o comprimento da parede em metros'));

var centimetros = metros * 100;
var milimetros = metros * 1000;

window.alert(`O comprimento em centimetos é = ${centimetros}`);
window.alert(`O comprimento em milimetros é = ${milimetros}`);

//Leia um numero qualquer e mostre na tela a sua tabuada
var num5 = Number(window.prompt('Digite um número para ver a sua tabuada'));

window.alert(`${num5} x 1 = ${num5*1}`);
window.alert(`${num5} x 2 = ${num5*2}`);
window.alert(`${num5} x 3 = ${num5*3}`);
window.alert(`${num5} x 4 = ${num5*4}`);
window.alert(`${num5} x 5 = ${num5*5}`);
window.alert(`${num5} x 6 = ${num5*6}`);
window.alert(`${num5} x 7 = ${num5*7}`);
window.alert(`${num5} x 8 = ${num5*8}`);
window.alert(`${num5} x 9 = ${num5*9}`);
window.alert(`${num5} x 10 = ${num5*10}`);

