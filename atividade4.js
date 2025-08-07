//4- Elabore um programa que leia um número. Calcule e informe o dobro desse número.
const pronpt = require('prompt-sync')();
let num = parseInt(pronpt('Digite um número: '));
let dobro = num * 2
console.log("o dobro de " + num + " é " + dobro);