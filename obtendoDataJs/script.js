//Pegando a data de hoje e formatando.
let data = new Date();

let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();

console.log(`${dia}/${mes}/${ano} ás ${hora}:${minutos}`);


console.log(data.toString());

console.log(data.toDateString());

console.log(data.toTimeString());

console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

console.log(data.toLocaleString("pt-BR", {
    dateStyle: "long"
}))

let dinheiro = 50

console.log(dinheiro.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))

console.log(new Intl.DateTimeFormat("en-US").format(data));
