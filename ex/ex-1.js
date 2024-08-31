/* 
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if. 
*/

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número inteiro: "));

const result = numero % 2 === 0 ? "O número é Par" : "O número é Impar";

console.log(result);
