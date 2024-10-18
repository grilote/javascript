
//Variável
let consumo, peso
//Limpar a tela antes de uma nova entrada
console.clear()
//Entrada
peso = Number(input.question("Digite o seu peso: (em kg)"))
//processamento
consumo = peso * 0.035 // (35 ml de agua por cada kg)
//saída
console.log(`Consumo diario de agua deve ser: ${consumo.toFixed(2)}`) // toFixed para deixar limitado á 2 caracteres de ml