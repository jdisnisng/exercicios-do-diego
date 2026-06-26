const input = require("readline-sync")

let C = input.questionFloat("Celsius = ")

console.log(`Em fahrenheit é igual a = ${C * 1.8 + 32}`)