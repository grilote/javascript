/**
 * Valor de desconto
 * @author Luiz Fernando
 */

const input = require ('readline-sync')

//variaveis
let total, valorPago, troco

console.clear()
console.log("Cálcular o troco de uma compra")

//entrada

valorPago = Number (input.question("Qual valor da pago? ")) 
total = Number (input.question("Qual o valor da compra? "))

//processamento
troco = valorPago - total

//saida
console.log(`Valor do troco: R$ ${troco.toFixed(2)}`)

