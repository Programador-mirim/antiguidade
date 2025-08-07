//1- Elabore um programa que leia um número. Informe se ele é par ou ímpar
const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Digite um número: '));
if (numero % 2 == 0) {
    console.log("O número " + numero + " é par");
} else {
    console.log("O número " + numero + " é impar");
}