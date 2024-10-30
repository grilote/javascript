/**
 * Estudos das funções simples
 * @author Luiz Fernando    
 */

hello()
//função literal
function hello() {
    console.log("Hello function")
}

console.log(typeof(hello))


//função atribuída
//funções atribuídas precisam ser criadas no inicio do código (antes da chamada da função)
const hello2 = function(){
    console.log("Hello2 function")
}
hello2()

//arrow function (forma simplificada de criar uma função atribuída)
const hello3 = () => {

}
hello3()
console.log(typeof(hello3))
// arrow function mais simplificada (neste caso só é possivel executar uma linha de código)

const hello4 = _ => console.log("Hello4 function")
hello4()
console.log(typeof(hello4))