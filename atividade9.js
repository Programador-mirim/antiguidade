//9- Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x. 
//Exemplo: 
//Preço R$: 60.00 
//À Vista R$: 54.00 
//Ou 3x de R$: 20.00
const prompt = require('prompt-sync')();
let precoProduto = parseFloat(prompt('Digite o preço do produto: '));
let precoAVista = precoProduto * 0.9;
let preco3x = precoProduto / 3;
console.log("Preço R$: " + precoProduto.toFixed(2));
console.log("À Vista R$: " + precoAVista.toFixed(2));
console.log("Ou 3x de R$: " + preco3x.toFixed(2));
