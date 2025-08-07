//6- Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
//Exemplo:
//Valor do Jantar R$: 80.00 
//Taxa do Garçom R$: 8.00 
//Total a Pagar R$: 88.00
const prompt = require('prompt-sync')();
let valorJantar = parseFloat(prompt('Digite o valor do jantar: '));
let taxaGarcom = valorJantar * 0.1;
let totalAPagar = valorJantar + taxaGarcom;
console.log("Valor do Jantar R$: " + valorJantar.toFixed(2));
console.log("Taxa do Garçom R$: " + taxaGarcom.toFixed(2));
console.log("Total a Pagar R$: " + totalAPagar.toFixed(2));