//10- Elabore um programa que liste os números em ordem decrescente com o valor inicial informado pelo usuário.
const prompt = require('prompt-sync')();
let valorInicial = parseInt(prompt('Digite um valor inicial: '));   
for (let i = valorInicial; i >= 0; i--) {
    console.log(i);
}