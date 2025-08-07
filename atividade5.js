//5- Elabore um programa que leia dois números. Calcule e informe a soma desses números.
const prompt = require('prompt-sync')();
let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let soma = num1 + num2;
console.log("A soma de " + num1 + " e " + num2 + " é " + soma);