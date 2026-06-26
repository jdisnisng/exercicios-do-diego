const input = require("readline-sync")

let num = input.questionInt("digite um numero = ")

console.log("\n--- contagem regressiva ---\n")

for(let i = num; i>0; i--) {
    console.log(i)
}

console.log("Fim!")