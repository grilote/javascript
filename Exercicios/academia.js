/**
 * APP Calculadora de saúde    
 * @author Luiz Fernando
 */

//bibliotecas
const input = require(`readline-sync`)
const color = require(`colors`)

//variaveis
let nome, idade, peso, altura, fcm, imc, consumo

console.clear()

//banner
console.log ("")                                                                                                       
console.log ("#    # ######   ##   #      ##### #    #     ####    ##   #       ####  #    # #      ###### # #####  ####  #####  ")
console.log ("#    # #       #  #  #        #   #    #    #    #  #  #  #      #    # #    # #      #      #   #   #    # #    # ")
console.log ("###### #####  #    # #        #   ######    #      #    # #      #      #    # #      #####  #   #   #    # #    # ")
console.log ("#    # #      ###### #        #   #    #    #      ###### #      #      #    # #      #      #   #   #    # #####  ")
console.log ("#    # #      #    # #        #   #    #    #    # #    # #      #    # #    # #      #      #   #   #    # #   #  ")
console.log ("#    # ###### #    # ######   #   #    #     ####  #    # ######  ####   ####  ###### ###### #   #    ####  #    # ")
console.log ("")                                                                                                                  
                                                                                                     

//entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em kg: "))
altura = Number(input.question("Digite a sua altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

//saida
console.log("")
console.log('ficha do aluno')
console.log('____________') 
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//Tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if(imc < 25) {
    console.log("Peso normal".green)
} else if(imc < 30) {
    console.log("Leve mente acima do peso".yellow)
} else if(imc < 35) {
    console.log("Obesidade Grrau I".magenta)
} else if(imc < 40) {
    console.log("Obesidade Grau II (severa)".red)
} else {
    console.log("Obesidade Grau III(mórbida)".bgRed)
}
// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de agua`)



