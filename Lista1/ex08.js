const input = require("readline-sync");

let tamanho = input.questionInt("Digite o tamanho: ");
let tabuleiro = "";

for (let x = 0; x < tamanho; x++) {
    for (let col = 0; col < tamanho; col++) {
        if ((x + col) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n";
}

console.log(tabuleiro);