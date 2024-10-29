/**
 * Jokenpo
 * @author Luiz Fernando
 */

//bibliote
const input = require ('readline-sync')

//variáveis
let jogador, computador
do{
console.clear()
console.log("_____JoKenPo_____")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

//Lógica do jogador
jogador = Numero(input.question("Digite a opcao desejada: "))

console.log("")
switch (jogador){
    case 1:
        console.log("Jogador escolheu: PEDRA")
        break
    case 2:
        console.log("Jogador escolheu: PAPEL")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA")
        break
        defaut:
        console.log("Opção Invalida")
        break
}

// Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador){
    case 1:
        console.log("computador escolheu: PEDRA")
        break
    case 2:
        console.log("computador escolheu: PAPEL")
        break
    case 3:
        console.log("computador escolheu: TESOURA")
        break 
}

opcao = input.question("Deseja jogar novamente(s/n)") 
} while (opcao === 's');
