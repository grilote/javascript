/**
 * Cálculo da média aritmética fr 3 valore
 * @author Luiz Fernando
 */

//importar a biblioteca read-linesync
const input = require('readline-sync')

let alcool, gasolina, media

console.clear()
console.log("Cálculo da divisão de alcool x gasolina")

alcool = Number(input.question("Digite o valor do alcool: "))
gasolina = Number(input.question("Digite o valor da gasolina: "))

media = alcool / gasolina

console.log(`Média: ${media.toFixed(1)}`)

if ( media > 0.7){
    console.log("Alcool")
}else {
    console.log("Gasolina")
}