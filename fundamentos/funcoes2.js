/**
 * Estudo das funções com parâmentros e retorno
 * @author Luiz Fernando
 */

function somar(a, b){
    return(console.log(a + b))
}

somar(5 , 2)

const somarA = function(a,b ){
    return (console.log(a +b))
}

somarA(5 ,3)

const somarAF = (a,b ) => {
    return (console.log(a +b))
}

somarA(2 ,2)

//Na função a baixo o retorno é implicito
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3, 9)

