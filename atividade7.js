//7- Elabore um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas. 
//Exemplo de dados de entrada e saída do programa (para uma viagem que dura 2 dias + 5 horas). 
//Nº Dias: 2 
//Nº Horas: 5 
//Total de Horas: 53
const prompt = require('prompt-sync')();
let dias = parseInt(prompt('Digite o número de dias da viagem: '));
let horas = parseInt(prompt('Digite o número de horas da viagem: '));
let totalHoras = dias * 24 + horas;
console.log("Total de Horas: " + totalHoras);
