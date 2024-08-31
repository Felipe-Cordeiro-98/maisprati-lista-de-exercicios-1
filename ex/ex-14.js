/*
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while.
*/

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "));

let valorFatorial = numero;

for (let i = numero - 1; i >= 1; i--) {
    valorFatorial *= i;
}

console.log(`O valor do fatorial de ${numero} é ${valorFatorial}`);
