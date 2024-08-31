/*
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for
*/

const numeros = [0, 1];

for (let i = 2; i < 10; i++) {
    let n = numeros[i - 1] + numeros[i - 2];
    numeros.push(n);
}

let result = numeros.join(", ");

console.log(result);
