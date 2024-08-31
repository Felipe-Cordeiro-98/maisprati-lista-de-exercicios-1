/*
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")();

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
    console.log("Os valores não podem ser iguais");
}

const valorMax = Math.max(valor1, valor2);
const valorMin = Math.min(valor1, valor2);

console.log(`Os valores em ordem crescente: ${valorMin}, ${valorMax}`);
