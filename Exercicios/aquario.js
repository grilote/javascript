/**
 * Cálculo do volume de um aquario
 * @author Luiz Fernando
 */

const input = require ('readline-sync')

//variáveis
let comprimento, largura, altura, volume

console.clear()
console.log("Cálculo do volume de um aquário")

//entrada
comprimento = Number(input.question("Digite o compromento em cm: "))
largura = Number(input.question("Digite o largura em cm: "))
altura = Number(input.question("Digite o altura em cm: "))

//processamento
volume = (comprimento * largura * altura) / 1000

//saída
console.log(`volume do aquario: ${volume.toFixed(2)}litros`)
