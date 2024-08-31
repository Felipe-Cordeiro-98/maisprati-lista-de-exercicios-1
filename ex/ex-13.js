/*
    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

let valor;
const valores = [];

while (valor !== 0) {
    valor = Number(prompt("Digite um número: "));
    if (valor !== 0) valores.push(valor);
}

let soma = 0;
valores.forEach((valor) => soma += valor);

const media = soma / valores.length;

console.log(`A média aritmética é: ${media}`);
