/*
    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else
*/

const prompt = require("prompt-sync")();

const altura = Number(prompt("Digite sua altura em metros (ex: 1.80): "));
const peso = Number(prompt("Digite seu peso em kg (ex: 65.0): "));

const imc = peso / (Math.pow(altura, 2));

if (imc < 18.5) {
    console.log("Baixo peso")
} else if (imc <= 24.9) {
    console.log("Peso normal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}
