/**
 * Ficha de um aluno de academia    
 * @autor Luiz Fernando
 */

//variaveis
let nome
let idade
let peso 
let altura
let vip
let fcm
let imc

console.clear()

//entrada de dados
nome = "Luiz Fernando"
idade = 44
peso = 76
altura = 1.83
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
//saida
console.log('ficha do aluno')
console.log('____________') 
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

