//Exercício 9 – Mínimo. Escreva uma função min(a, b) que receba dois números e retorne o menor deles. Não use Math.min. Escreva a versão tradicional e depois reescreva como Arrow Function.

const input = require("readline-sync")

function min(a, b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

let a = 1
let b = 2

console.log(`o menor deles eh ${min(a,b)}`)