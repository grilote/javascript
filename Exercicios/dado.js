/**
 * Exemplo de uso do método para gerar número aleatórios
 * Jogo do dado
 * @author Luiz Fernando
 */

const input = require('readline-sync')

let face

console.clear()
console.log("Jogo de dado")
input.question("Pressione a tecla [Entre] para jogar o dado")

//Sorteio da face de um dado
//math classe matematica
// floor() conversão para numeros inteiros
// random()* (gerador de números aleatorios)

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
console.log(`Face do dado: ${face}`)
