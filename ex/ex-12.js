/*
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)
    utilizando um loop for
*/

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número (de 1 a 10): "));

if (numero < 1 || numero > 10) {
    console.log("O número digitado tem que está entre 1 e 10");
} else {
    console.log("*******************************************");
    console.log(`Tabuada de ${numero}`);

    for (let i = 1; i <= 10; i++) {
        let x = numero * i;
        console.log(`${numero} X ${i} = ${x}`);
    }
    console.log("*******************************************");
}
