/*
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")();

const quantidade = Number(prompt("Quantidade de maçãs: "));
let valorDaCompra;

if (quantidade < 12) {
    valorDaCompra = quantidade * 0.30;
} else {
    valorDaCompra = quantidade * 0.25;
}

console.log(`O valor da compra é R$ ${valorDaCompra.toFixed(2)}`);
