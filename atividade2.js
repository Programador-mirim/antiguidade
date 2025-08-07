//2- Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 
const prompt = require('prompt-sync')();
let velocidadePermitida = parseFloat(prompt('Digite a velocidade permitida na estrada: '));
let velocidadeCondutor = parseFloat(prompt('Digite a velocidade do condutor: '));
if (velocidadeCondutor <= velocidadePermitida) {
    console.log("Sem multa");
} else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
    console.log("Multa leve");
} else {
    console.log("Multa grave");
}