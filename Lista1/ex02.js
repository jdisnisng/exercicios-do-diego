const input = require("readline-sync")

let base = input.questionFloat("base = ")
let lado = input.questionFloat("altura = ")

console.log(`o perimetro desse triangulo eh de = ${base + (lado * 2)}`)
console.log(`e a area eh de = ${(base*lado) / 2}`)