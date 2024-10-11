/**
 * App Etanol x Gasolina
 * @author Luiz Fernando
 */

const input = require('readline-sync')

let etanol, gasolina 

console.log("Etanol x Gasolina")

etanol = Number(input.question("Digite o valor da etanol: "))
gasolina = Number(input.question("Digite o valor da Gasolina: "))

//processamento e saída

if (etanol < 0.7 * gasolina){
    console.log("Abastecer com etanol")
} else {
    console.log("Abastecer com gasolina")
}