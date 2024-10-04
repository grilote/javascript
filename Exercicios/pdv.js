/**
 * PDV
 * @author Luiz Fernando
 */

const input = require('readline-sync')
// variaveis

let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log("____________ _   _") 
console.log("| ___ \\  _  \\ | | |")
console.log("| |_/ / | | | | | |")
console.log("|  __/| | | | | | |")
console.log("| |   | |/ /\\ \\_/ /")
console.log("\\_|   |___/  \\___/ ")
console.log("")

//entrada 1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento 1
valorDesconto = (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto
console.log("")
console.log("______________")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto:  ${valorDesconto.toFixed(2)}`) 
console.log(`Total com desconto:  ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

//processamento 3
troco = valorPago - totalDesconto

//saída 1

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)

