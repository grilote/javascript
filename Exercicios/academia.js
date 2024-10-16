/**
 * Ficha de um aluno de academia    
 * @author Luiz Fernando
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
peso = 95
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
//Tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if(imc < 25) {
    console.log("Peso normal")
} else if(imc < 30) {
    console.log("Leve mente acima do peso")
} else if(imc < 35) {
    console.log("Obesidade Grrau I")
} else if(imc < 40) {
    console.log("Obesidade Grau II (severa)")
} else {
    console.log("Obesidade Grau III(mórbida)")
}


