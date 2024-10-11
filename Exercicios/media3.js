/**
 * Cálculo da média aritmética fr 3 valore
 * @author Luiz Fernando
 */

//importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors') // biblioteca de cores

//variáveis
let num1, num2, num3, media

console.clear()
console.log("Cálculo da média aritmética de 3 numeros")

//entrada
//No console entradas(input) numéricas precisam ser convertidas com uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

//processamento
media = (num1 + num2 + num3) / 3

//saída
console.log(`Média: ${media.toFixed(1)}`)
if ( media >= 5){
    console.log("Aluno APROVADO".blue)
}else {
    console.log("Aluno REPROVADO".red)
}