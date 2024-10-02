/**
 * Cálculo do consumo de combustível
 * @author Luiz Fernando
 */

const input = require ('readline-sync')

let distancia, litros, consumo

console.clear()
console.log("Cálculo do consumo de combustivel")


//entrada
distancia = Number(input.question("Distancia percorrida: "))
litros = Number(input.question("Quantidade de litros de combustivel: "))

//processamento
consumo = distancia / litros

//saída
console.log(`Consumo do veículo: ${consumo.toFixed(1)} km/l`)
