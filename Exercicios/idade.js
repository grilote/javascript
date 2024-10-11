/**
 * Verificar maioridade
 * @author Luiz Fernando
 */

const input = require('readline-sync') // require(readline-sync) importação da biblioteca

let idade

console.clear()
console.log("Verificar maioridade")
idade = Number(input.question("Digite a idade: "))
console.log(`Idade: ${idade}`)
if (idade < 18){
    console.log("Menor de idade ")
} else {
    console.log("Maior de idade")
}
