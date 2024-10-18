/**
 * Exercicio de votação
 *@author Luiz Fernando 
 */
const input = require('readline-sync') // importação de biblioteca(pacote)
 //variavel 
 let idade
 
 console.clear()
 console.log("Verificar obrigatoriedade de votar")
 
 //entrada de dados
idade = Number(input.question("Digite a sua idade: "))

 //processamento
if (idade < 16){
    console.log("Proibido votar")
} else if (idade > 17 && idade < 71){
    console.log("Voto obrigatorio")
} else {
    console.log("facutativo")
}
