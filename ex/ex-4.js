/*
    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada
*/

const prompt = require("prompt-sync")();

let opcao;

const tarefas = [];
do {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar nova tarefa");
    console.log("2. Exibir tarefas existentes");
    console.log("3. Sair");
    console.log("");

    opcao = Number(prompt("Digite a opção desejada: "));
    console.log("");

    switch (opcao) {
        case 1:
            let tarefa = prompt("Digite a nova tarefa: ");
            tarefas.push(tarefa);
            break;
        case 2:
            tarefas.forEach(item => console.log(item));
            break;
        case 3:
            console.log("Volte sempre :)");
            break;
        default:
            console.log("Opção inválida");
            break;
    }
    console.log("");
} while (opcao != 3);
